const mongoose = require('mongoose');


const ProductTypeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true }
});
const ProductType = mongoose.model('ProductType', ProductTypeSchema);

module.exports = ProductType;
 