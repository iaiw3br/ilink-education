import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserFilterDto } from './dto/get-user-filter.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async getUsers(filterDto: GetUserFilterDto): Promise<User[]> {
    const query = this.createQueryBuilder('user');
    const users = await query.getMany();

    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, friendId, groupId } = createUserDto;
    const user = new User();
    const friend = await this.findOne(friendId);

    user.name = name;
    // @ts-ignore
    user.groupsUsers = [{id: groupId}];
    user.friends = [friend];
    await user.save();

    return user;
  }

}