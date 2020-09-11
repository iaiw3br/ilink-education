import {
    BaseEntity,
    Column,
    Entity, JoinTable, ManyToMany, ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {Group} from "../group/group.entity";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 500, nullable: true})
    name: string;

    @Column("text", {array: true, nullable: true})
    @ManyToMany(type => Group)
    @JoinTable()
    groupsUsers: Group[];


    @Column({ type: "simple-json", nullable: true  })
    @OneToMany(type => User, user => user.user)
    friends: User[];

    @ManyToOne(type => User, user => user.friends, {nullable: true})
    user: User;

}