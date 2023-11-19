import bcrypt from 'bcrypt'
import Doctor from '../modules/DoctorSchema.js'
import User from "../modules/UserSchema.js"

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body
    try {
        let user = null
        // Check User Role
        if (role === 'patient') {
            user = await User.findOne({ email })
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }
        // Check if user exists
        if (user) {
            res.status(400).json({
                message: 'User already exists'
            })
        }
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                gender,
                role,
                photo
            })
        }
        if (role === 'doctor') {
            user = new User({
                name,
                email,
                password: hashPassword,
                gender,
                role,
                photo
            })
        }
        await user.save()
        res.status(200).json({ success: true, message: 'User Successfully Created' })


    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error, Try Again' })
    }
}
export const login = async (req, res) => {
    try {

    } catch (error) {

    }
}