import {Router} from 'express'
import  auth from './auth.router'
import user from './user.router'

const router = Router()

router.use('/api',auth)
router.use('/api',user)

export default router