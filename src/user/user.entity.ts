import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
// import { Group } from '../groups/groups.entity';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    // @ManyToMany(type => Group, {cascade: true})
    // @JoinTable({
    //     name: 'group_user',
    //     joinColumn: {name: 'user_id', referencedColumnName: 'id'},
    //     inverseJoinColumn: {name: 'group_id', referencedColumnName: 'id'}
    // })
    // ids_groups: Group[]


}