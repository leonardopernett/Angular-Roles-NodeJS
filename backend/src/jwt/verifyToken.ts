import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'


export const verifyToken = async (req:Request, res:Response,next:NextFunction)=>{
    if(req.headers['Authorization']){
      return res.status(403).json('not authorization')
    }

    const token  = req.headers['authorization']?.split(' ')[1]
    if(!token){
      return res.status(403).json('not authorization')
    }

    const payload:any = jwt.verify(token ,'secretkey')
    if(!payload){
      return res.status(403).json('not authorization')
    }
    res.locals.id = payload.id

    next()

}