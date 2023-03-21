const mongoose = require('mongoose');


const RolSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: {type: String, required: true}
});
const Rol = mongoose.model('Rol', Rol);

module.exports = User;