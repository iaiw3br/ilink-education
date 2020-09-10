import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe, Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from './user.entity';
import {GetUserFilterDto} from './dto/get-user-filter.dto';
import {CreateUserDto} from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    getUsers(@Query(ValidationPipe) filterDto: GetUserFilterDto) {
        return this.userService.getUsers(filterDto);
    }

    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Delete('/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }

    @Patch('/:id/name')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body('name') name: string,
    ): Promise<User> {
        return this.userService.updateUser(id, name);
    }

    @Patch('/:id/group')
    updateUserGroup(
        @Param('id', ParseIntPipe) id: number,
        @Body('groupId') groupId: number,
    ): Promise<void> {
        return this.userService.updateUserGroup(id, groupId);
    }

    @Patch('/:id/friend')
    updateUserFriend(
        @Param('id', ParseIntPipe) id: number,
        @Body('friendId') friendId: number,
    ): Promise<void> {
        return this.userService.updateUserFriend(id, friendId);
    }

}
