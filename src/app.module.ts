import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {UserModule} from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import {Group} from "./group/group.entity";
import {GroupModule} from "./group/group.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/user',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [
                User,
                Group,
            ]
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        UserModule,
        GroupModule,
    ],
})
export class AppModule {
}
