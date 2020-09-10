import {Field, InputType} from "@nestjs/graphql";
import {MinLength} from "class-validator";

@InputType()
export class CreateGroupInput {

    @MinLength(1)
    @Field()
    name: string;

}