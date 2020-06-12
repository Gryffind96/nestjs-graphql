import { Entity, ObjectIdColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Student {

  @ObjectIdColumn()
  _id:string;

  @PrimaryGeneratedColumn()
  id:string;

  @Column()
  firstName:string;

  @Column()
  lastName:string;


}