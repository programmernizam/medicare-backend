import express from 'express'
import { userController } from './userController.js'

const router = express.Router()

router.get('/:id', userController.getSingleUser)
router.get('/', userController.getAllUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router