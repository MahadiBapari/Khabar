const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        min: 6,
    },
    des: {
        type: String,
        required: true,
        min: 8,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    review: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model("Product", ProductSchema)

model.exports = Product;