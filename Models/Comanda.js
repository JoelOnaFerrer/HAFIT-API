const mongoose = require('mongoose');


const ComandaSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  entryDate: { type: Date, required: true },
  number: {type: Number, required: true},
  depurateDate: { type: date, required: true }
});
const Comanda = mongoose.model('Comanda', ComandaSchema);

module.exports = Comanda;
 