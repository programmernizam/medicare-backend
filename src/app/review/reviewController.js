import Review from '../../modules/ReviewSchema.js'
const getAllReviews = async (req, res) => {
    try {
        const review = await Review.find({})
        res.status(200).json({ success: true, message: 'Reviews Found Successfully', data: review })
    } catch (error) {
        res.status(400).json({ success: false, message: 'No Data Found' })
    }
}