const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
  });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product