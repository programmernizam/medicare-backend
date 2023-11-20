import Doctor from "../../modules/DoctorSchema.js"

const updateDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: 'Doctor Successfully Updated', data: updateDoctor })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Field Update' })
    }
}

const deleteDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const deleteDoctor = await Doctor.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Doctor Successfully Deleted', data: deleteDoctor })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Field Update' })
    }
}

export const doctorController = {
    updateDoctor,
    getAllDoctor,
    getSingleDoctor,
    deleteDoctor
}