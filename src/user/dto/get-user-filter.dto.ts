import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetUserFilterDto {

  @IsOptional()
  @IsNotEmpty()
  name: string;

}