import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {v4 as uuid } from "uuid";
import {CreateUserInput} from "./user.input";

@Injectable()
export class UserService {
    constructor(
       @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async createUser(createUserInput: CreateUserInput): Promise<User> {
        const { name } = createUserInput;
        const user = this.userRepository.create({
            id: uuid(),
            name,
            groups: [],
        })
        return this.userRepository.save(user);
    }

    async getUserById(id: string): Promise<User> {
        return this.userRepository.findOne({id});
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async deleteUser(id: string): Promise<Boolean> {
        const user = await this.userRepository.findOne({id});

        if ( !user ) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        await this.userRepository.delete({id})
        return true;
    }

    async updateNameUser(id: string, name: string): Promise<User> {
        const user = await this.userRepository.findOne({id});
        user.name = name;
        return this.userRepository.save(user);
    }

    async assignGroupsToUser(userId: string, groupIds: string[]): Promise<User> {
        const user = await this.userRepository.findOne({id: userId});
        user.groups = [...user.groups, ...groupIds];
        return this.userRepository.save(user);
    }
}
