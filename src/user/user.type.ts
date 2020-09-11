import {Field, ID, ObjectType} from "@nestjs/graphql";
import {GroupType} from "../group/group.type";

@ObjectType('user')
export class UserType {

    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field(type => [GroupType])
    groups: string[];
}