import jwt from 'jsonwebtoken'

export const generarToken = (user:{id:number,name:string, email:string, roles:string})=>{
  
  return jwt.sign({
            id:user.id,
            name:user.name,
            email:user.email,
            roles:user.roles
         }, 'secretkey',{ expiresIn:'1h'})
    }