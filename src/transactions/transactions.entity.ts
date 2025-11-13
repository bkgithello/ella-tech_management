/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transactions{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  productId: number;

  @Column('int')
  changeAmount: number;

  @Column('int')
  previousQuantity: number;

  @Column('int')
  newQuantity: number;

  @CreateDateColumn()
  createdAt: Date;
}