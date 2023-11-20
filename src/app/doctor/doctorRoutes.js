import express from 'express'
import { doctorController } from './doctorController.js'

const router = express.Router()

router.get('/:id', doctorController.getSingleDoctor)
router.get('/', doctorController.getAllDoctor)
router.put('/:id', doctorController.updateDoctor)
router.delete('/:id', doctorController.deleteDoctor)

export const doctorRoutes = router