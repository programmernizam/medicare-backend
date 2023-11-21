import express from 'express'
import { authenticate, restrict } from '../../auth/verifyToken.js'
import { reviewController } from './reviewController.js'

const router = express.Router()

router.get('/', reviewController.getAllReviews)
router.post('/', authenticate, restrict(['patient']), reviewController.createReview)

export const reviewRoutes = router