import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 500})
    name: string;

}