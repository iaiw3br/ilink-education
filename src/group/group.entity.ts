import {Column, Entity, ObjectIdColumn, PrimaryColumn} from "typeorm";

@Entity()
export class Group {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

}