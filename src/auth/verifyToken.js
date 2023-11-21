
export const authenticate = async (req, res, next) => {
    // Get Token From Headers
    const authToken = req.headers.authorization

    // Check Token exist
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No Token, Access Denied' })
    }
    try {
        console.log(authToken);
        next()

    } catch (error) {

    }
}