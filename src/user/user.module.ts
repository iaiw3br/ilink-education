import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {UserRepository} from "./user.repository";
import {GroupRepository} from "../group/group.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, GroupRepository])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
