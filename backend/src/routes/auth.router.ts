import {Router} from 'express'
import {getRepository} from 'typeorm'
import { User } from '../entity/User'
import bcrypt from 'bcryptjs'
import {generarToken} from '../jwt/generarToken'
const router = Router()

router.post('/auth/login',async (req,res)=>{
    try {
        const {email, password }= req.body
    const user = await getRepository(User).findOne({where:{email:email}})
    if(!user) return res.status(401).json("user or password incorrect");

    const match =  await bcrypt.compare(password, user.password)
    if(!match) return res.status(401).json("user or password incorrect");

    const token = generarToken(user)
    return res.json({accessToken: token})
    } catch (error) {
        return error
    }
})

export default router