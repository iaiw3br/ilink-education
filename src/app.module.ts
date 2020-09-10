import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {UserModule} from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/user',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [
                User,
            ]
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        UserModule
    ],
})
export class AppModule {
}
