const mongoose = require('mongoose');


const PlanSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  number: {type: Number, required: true},
  description: { type: String, required: true }
});
const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
 