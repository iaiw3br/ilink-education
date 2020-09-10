import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {GroupType} from "./group.type";
import {GroupService} from "./group.service";
import {Group} from "./group.entity";
import {CreateGroupInput} from "./group.input";

@Resolver(of => GroupType)
export class GroupResolver {
    constructor(
        private groupService: GroupService
    ) {
    }

    @Query(returns => GroupType)
    group(
        @Args('id') id: string,
    ): Promise<Group> {
        return this.groupService.getGroupById(id);
    }

    @Query(returns => [GroupType])
    getGroups(): Promise<GroupType[]> {
        return this.groupService.getGroups();
    }

    @Mutation(returns => GroupType)
    createGroup(
        @Args('createGroupInput') createGroupInput: CreateGroupInput,
    ): Promise<Group> {
        return this.groupService.createGroup(createGroupInput);
    }

    @Mutation(() => Boolean)
    deleteGroup(
        @Args('id') id: string,
    ): Promise<Boolean> {
        return this.groupService.deleteGroup(id);
    }

    @Mutation( returns => GroupType)
    updateNameGroup(
        @Args('id') id: string,
        @Args('name') name: string,
    ): Promise<Group> {
        return this.groupService.updateNameGroup(id, name);
    }
}