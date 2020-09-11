import {Column, Entity, ManyToOne, ObjectIdColumn, OneToMany, PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    groups: string[];

    @Column()
    friends: string[];

}