import User from "../../modules/UserSchema.js"
const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: 'Successfully Updated', data: updateUser })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Field Update' })
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Successfully Deleted', data: deleteUser })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Field Update' })
    }
}
const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const findUser = await User.findById(id).select("-password")
        res.status(200).json({ success: true, message: 'User Found Successfully', data: findUser })
    } catch (error) {
        res.status(404).json({ success: false, message: 'No user found' })
    }
}
const getAllUser = async (req, res) => {
    try {
        const user = await User.find({}).select("-password")
        res.status(200).json({ success: true, message: 'Users Found Successfully', data: user })
    } catch (error) {
        res.status(404).json({ success: false, message: 'No users found' })
    }
}

const getUserProfile = async (req, res) => {
    const userId = req.userId
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'No user found'
            })
        }
        const { password, ...rest } = user._doc
        res.status(200).json({
            success: true, message: 'Profile info is getting',
            data: { ...rest }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot get user data" })
    }
}


export const userController = {
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser,
    getUserProfile,
    getMyAppointment

}