import { NextFunction, Request, Response } from "express"
import {getRepository} from 'typeorm'
import { User } from "../entity/User"

export const verifyRole = (roles:Array<string>)=>{
   
   return async (req:Request,res:Response,next:NextFunction) =>{
        const user:any = await  getRepository(User).findOne({where:{id:res.locals.id}})

        if(roles.includes(user.roles)){
          next()
        }else{
          res.status(403).json('not eres user admin')
        }
        
   }
}