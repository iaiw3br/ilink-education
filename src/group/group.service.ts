import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Group} from "./group.entity";
import {Repository} from "typeorm";
import {v4 as uuid } from "uuid";
import {CreateGroupInput} from "./group.input";

@Injectable()
export class GroupService {
    constructor(
       @InjectRepository(Group) private groupRepository: Repository<Group>,
    ) {}

    async createGroup(createGroupInput: CreateGroupInput): Promise<Group> {
        const { name } = createGroupInput;
        const group = this.groupRepository.create({
            id: uuid(),
            name,
        })
        return this.groupRepository.save(group);
    }

    async getGroupById(id: string): Promise<Group> {
        return this.groupRepository.findOne({id});
    }

    async getGroups(): Promise<Group[]> {
        return this.groupRepository.find();
    }

    async deleteGroup(id: string): Promise<Boolean> {
        const group = await this.groupRepository.findOne({id});

        if ( !group ) {
            throw new NotFoundException(`Group with id ${id} not found`);
        }

        await this.groupRepository.delete({id})
        return true;
    }

    async updateNameGroup(id: string, name: string): Promise<Group> {
        const group = await this.groupRepository.findOne({id});
        group.name = name;
        return this.groupRepository.save(group);
    }
}
