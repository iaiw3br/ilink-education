import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        name: 'name',
    })
    name: string;

}