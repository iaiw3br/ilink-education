import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  name: string;

  ids_friends: number[];

  groupId: number;

}