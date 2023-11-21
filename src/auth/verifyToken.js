import jwt from "jsonwebtoken"

export const authenticate = async (req, res, next) => {
    // Get Token From Headers
    const authToken = req.headers.authorization

    // Check Token exist
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No Token, Access Denied' })
    }
    try {
        const token = authToken.split("")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decoded.id
        req.role = decoded.role
        next()

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Token is expired'
            })
        }
        return res.status(401).json({ success: false, message: 'Invalid Token' })
    }
}