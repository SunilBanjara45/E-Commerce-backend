const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            index: true
        },
        productImage: [
            {
                type: String,
                required: true
            }
        ],
        mrpPrice: {
            type: Number,
            required: true,
        },
        sellingPrice: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        generalInfo: [
            {
                key: String,
                value: String
            }
        ],
        WarrantyInfo: [
            {
                key: String,
                value: String
            }
        ]
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', productSchema)