import {Response, Request} from 'express'
import {getRepository} from 'typeorm'
import { User } from '../entity/User'
import bcrypt from 'bcryptjs'

export const getUsers = async (req:Request, res:Response)=>{
     const users = await getRepository(User).find();
     return res.json(users)
} 

export const getoneUsers = async (req:Request, res:Response)=>{
  const {id} = req.query
  const user = await getRepository(User).findOne({where:{id}});
  if(!user) return res.status(401).json('user not found')
  console.log(user)
  return res.json(user)
}

export const saveUsers = async (req:Request, res:Response)=>{
  const { name, email , password, roles } = req.body
  const user = await getRepository(User).create({name,email, password, roles})
     user.password =  await bcrypt.hash(password, 10)

  await getRepository(User).save(user)
  return res.json({message:'USer created'})
}

export const deleteUsers = async (req:Request, res:Response)=>{
    const {id}= req.params
    const user = await getRepository(User).findOne({where:{id}});
  
    if(!user) throw new Error('user not found')
    await getRepository(User).delete(id)
    return res.json({message:'user deleted'})
}

export const updateUsers = async  (req:Request, res:Response)=>{
  const {id}= req.params
  const user = await getRepository(User).findOne({where:{id}});
  const newUSer = Object.assign(user,req.body)
  await getRepository(User).save(newUSer)
  return res.json({message:'user updated'})
}