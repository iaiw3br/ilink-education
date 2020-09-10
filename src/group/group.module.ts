import {Module} from '@nestjs/common';
import {GroupResolver} from "./group.resolver";
import {GroupService} from './group.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Group} from "./group.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Group])
    ],
    providers: [
        GroupResolver,
        GroupService
    ]
})
export class GroupModule {
}
