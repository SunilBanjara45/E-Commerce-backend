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

exports.module = mongoose.model("Category", categorySchema)