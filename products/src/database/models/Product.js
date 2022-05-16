const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    type: String,
    unit: Number,
    price: Number,
    available: Boolean,
    
});

module.exports =  mongoose.model('product', ProductSchema);