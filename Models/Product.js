const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: mongoose.Decimal128, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  stock: { type: Number, required: true },
},{ collection: 'Product'});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
