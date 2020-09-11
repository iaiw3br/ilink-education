import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {UserType} from "./user.type";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {CreateUserInput} from "./user.input";
import {AssignGroupsToUserInput} from "./assign-groups-to-user.input";
import {AssignFriendsToUserInput} from "./assign-friends-to-user.input";

@Resolver(of => UserType)
export class UserResolver {
    constructor(
        private userService: UserService
    ) {
    }

    @Query(returns => UserType)
    user(
        @Args('id') id: string,
    ): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Query(returns => [UserType])
    getUsers(): Promise<UserType[]> {
        return this.userService.getUsers();
    }

    @Mutation(returns => UserType)
    createUser(
        @Args('createUserInput') createUserInput: CreateUserInput,
    ): Promise<User> {
        return this.userService.createUser(createUserInput);
    }

    @Mutation(() => Boolean)
    deleteUser(
        @Args('id') id: string,
    ): Promise<Boolean> {
        return this.userService.deleteUser(id);
    }

    @Mutation( returns => UserType)
    updateNameUser(
        @Args('id') id: string,
        @Args('name') name: string,
    ): Promise<User> {
        return this.userService.updateNameUser(id, name);
    }

    @Mutation(returns => UserType)
    assignGroupsToUser(
        @Args('assignGroupsToUserInput') assignGroupsToUserInput: AssignGroupsToUserInput,
    ): Promise<User> {
        const { userId, groupIds} = assignGroupsToUserInput;
        return this.userService.assignGroupsToUser(userId,groupIds);
    }

    @Mutation(returns => UserType)
    assignFriendsToUser(
        @Args('assignFriendsToUserInput') assignFriendsToUserInput: AssignFriendsToUserInput,
    ): Promise<User> {
        const {userId, friendIds} = assignFriendsToUserInput;
        return this.userService.assignFriendsToUser(userId, friendIds);
    }
}