const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            index: true
        },
        categoryImage: {
            type: String,
            required: ture
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Category", categorySchema)