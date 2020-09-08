import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import {typeOrmConfig} from "./config/typeorm.config";
import { GroupModule } from './group/group.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        UserModule,
        GroupModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
