import express from 'express';
import { authRoutes } from '../app/auth/authRoutes.js';
import { userRoutes } from '../app/user/userRoutes.js';

const router = express.Router()

const moduleRoutes = [{
    path: "/auth",
    route: authRoutes
}, {
    path: '/user',
    route: userRoutes
}]

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router