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
import { GroupService } from './group.service';
import { Group } from './group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import {GetGroupFilterDto} from "./dto/get-group-filter.dto";

@Controller('group')
export class GroupController {
    constructor(private groupService: GroupService) {
    }

    @Get()
    getGroups(@Query(ValidationPipe) filterDto: GetGroupFilterDto) {
        return this.groupService.getGroups(filterDto);
    }

    @Get('/:id')
    getGroupById(@Param('id', ParseIntPipe) id: number): Promise<Group> {
        return this.groupService.getGroupById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createGroup(@Body() createGroupDto: CreateGroupDto): Promise<Group> {
        return this.groupService.createGroup(createGroupDto);
    }

    @Delete('/:id')
    deleteGroup(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.groupService.deleteGroup(id);
    }

    @Patch('/:id/name')
    updateGroup(
        @Param('id', ParseIntPipe) id: number,
        @Body('name' ) name: string
    ): Promise<Group> {
        return this.groupService.updateGroup(id, name);
    }

}
