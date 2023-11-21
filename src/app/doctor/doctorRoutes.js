import express from 'express'
import { authenticate, restrict } from '../../auth/verifyToken.js'
import { doctorController } from './doctorController.js'
const router = express.Router()

router.get('/:id', authenticate, restrict(['doctor']), doctorController.getSingleDoctor)
router.get('/', authenticate, restrict(['admin']), doctorController.getAllDoctor)
router.put('/:id', authenticate, restrict(['doctor']), doctorController.updateDoctor)
router.delete('/:id', authenticate, restrict(['doctor']), doctorController.deleteDoctor)

export const doctorRoutes = router