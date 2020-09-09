import { IsNotEmpty } from 'class-validator';
import {User} from "../user.entity";

export class CreateUserDto {

  @IsNotEmpty()
  name: string;

  ids_friends: number[];


}