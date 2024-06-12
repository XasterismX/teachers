import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stuff{

  @PrimaryGeneratedColumn()
  id:number
  @Column({type:"text"})
  name:string
}