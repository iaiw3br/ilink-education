import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType('User')
export class GroupType {

    @Field(type => ID)
    id: string;

    @Field()
    name: string;
}