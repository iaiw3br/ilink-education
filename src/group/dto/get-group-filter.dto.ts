import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetGroupFilterDto {

  @IsOptional()
  @IsNotEmpty()
  name: string;

}