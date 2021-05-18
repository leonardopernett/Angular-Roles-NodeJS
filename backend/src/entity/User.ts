import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {

 @PrimaryGeneratedColumn()
 id:number 


 @Column({type:'varchar', length:50})
 name:string

 @Column({type:'varchar', length:255,nullable:false, unique:true})
 email:string


 @Column({type:'varchar', length:255, nullable:false,})
 password:string


 @Column({type:'varchar', length:50})
 roles:string


 @CreateDateColumn({name:'created_at'})
 created:Date

 @UpdateDateColumn({name:'updated_at'})
 updated:Date



}