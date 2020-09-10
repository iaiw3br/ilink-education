import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  name: string;

  friendId: number;

  groupId: number;

}