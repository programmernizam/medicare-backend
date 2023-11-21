import express from 'express'
import { authenticate, restrict } from '../../auth/verifyToken.js'
import { userController } from './userController.js'

const router = express.Router()

router.get('/:id', authenticate, restrict(['patient']), userController.getSingleUser)
router.get('/', authenticate, restrict(['admin']), userController.getAllUser)
router.put('/:id', authenticate, restrict(['patient']), userController.updateUser)
router.delete('/:id', authenticate, restrict(['patient']), userController.deleteUser)

export const userRoutes = router