import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupRepository } from './group.repository';
import { Group } from './group.entity';
import { GetGroupFilterDto } from './dto/get-group-filter.dto';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(GroupRepository)
        private groupRepository: GroupRepository,
    ) {}

    async getGroupById(id: number): Promise<Group> {
        const group = await this.groupRepository.findOne(id);

        if (!group) {
            throw new NotFoundException(`Group with id ${id} not found`);
        }

        return group;
    }

    getGroups(filterDto: GetGroupFilterDto): Promise<Group[]> {
        return this.groupRepository.getGroups(filterDto);
    }

    async createGroup(createGroupDto: CreateGroupDto): Promise<Group> {
        return this.groupRepository.createGroup(createGroupDto);
    }

    async deleteGroup(id: number): Promise<void> {
        const group = await this.groupRepository.delete(id);

        if (!group.affected) {
            throw new NotFoundException(`Group with id ${id} not found`);
        }
    }

    async updateGroup(id: number, name: string): Promise<Group> {
        const group = await this.getGroupById(id);
        group.name = name;

        await group.save();

        return group;
    }
}
