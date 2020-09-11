import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from "./user.entity";
import {GetUserFilterDto} from "./dto/get-user-filter.dto";
import {UserRepository} from "./user.repository";
import {CreateUserDto} from "./dto/create-user.dto";
import {GroupRepository} from "../group/group.repository";
import {Group} from "../group/group.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private groupRepository: GroupRepository,
    ) {
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user;
    }

    getUsers(filterDto: GetUserFilterDto): Promise<User[]> {
        return this.userRepository.getUsers(filterDto);
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }

    async deleteUser(id: number): Promise<void> {
        const user = await this.userRepository.delete(id);

        if (!user.affected) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
    }

    async updateUser(id: number, name: string): Promise<User> {
        const user = await this.getUserById(id);
        user.name = name;

        await user.save();

        return user;
    }

    async assignGroupsToUser(id: number, groupIds: string[]): Promise<void> {

        const user = await this.getUserById(id);
        // @ts-ignore
        groupIds = JSON.parse(groupIds);
        const groups = await this.groupRepository.findByIds(groupIds);
        user.groupsUsers = [...user.groupsUsers, ...groups];
        await user.save();

    }

    async assignFriendsToUser(id: number, friendIds: string[]): Promise<User> {
        const user = await this.getUserById(id);
        // @ts-ignore
        friendIds = JSON.parse(friendIds);
        const friends = await this.userRepository.findByIds(friendIds)
        user.friends = [...user.friends, ...friends];

        await user.save();

        return user;
    }
}
