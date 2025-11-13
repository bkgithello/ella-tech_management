/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string;

    @Column('int')
    quantity:number;

    @Column('decimal')
    price:number;

    @CreateDateColumn()
    createdAt:Date;
}