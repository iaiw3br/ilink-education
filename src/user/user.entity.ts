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
    id: string;

    @Column({unique: true})
    name: string;

    @ManyToMany(type => Group, {cascade: true})
    @JoinTable({
        name: 'group_user',
        joinColumn: {name: 'user_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'group_id', referencedColumnName: 'id'}
    })
    groupsUsers: Group[]

    @Column({ type: "simple-json", nullable: true  })
    @OneToMany(type => User, user => user.user)
    friends: User[];

    @ManyToOne(type => User, user => user.friends)
    user: User;

}