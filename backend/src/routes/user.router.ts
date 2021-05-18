import {Router} from 'express'
import {deleteUsers, getoneUsers, getUsers, saveUsers, updateUsers} from '../controller/userController'
import { verifyRole } from '../jwt/verifyRole'
import { verifyToken } from '../jwt/verifyToken'

const router = Router()

router.get('/users', [verifyToken, verifyRole(['admin'])],getUsers)
router.post('/users',saveUsers)
router.get('/user',getoneUsers)
router.delete('/users/:id',deleteUsers)
router.put('/users/:id',updateUsers)



export default router