import { EntityRepository, Repository } from 'typeorm';
import { Group } from './group.entity';
import { GetGroupFilterDto } from './dto/get-group-filter.dto';
import { CreateGroupDto } from './dto/create-group.dto';

@EntityRepository(Group)
export class GroupRepository extends Repository<Group> {

  async getGroups(filterDto: GetGroupFilterDto): Promise<Group[]> {
    const queryToGroup = this.createQueryBuilder('group');
    const groups = await queryToGroup.getMany();

    return groups;
  }

  async createGroup(createGroupDto: CreateGroupDto): Promise<Group> {
    const { name } = createGroupDto;
    const group = new Group();

    group.name = name;

    await group.save();

    return group;
  }

}