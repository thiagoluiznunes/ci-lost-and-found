const restful = require('node-restful');
const mongoose = restful.mongoose;

const itemSchema = new mongoose.Schema({
  type: {type: String, required: true},
  description: {type: String, required: true},
  contact: {type: String, required: true},
  data: {
    day:{type: Number, min: 0, max: 31, required: true},
    month: {type: Number, min: 1, max: 12, required: true}
  }});

module.exports = restful.model('Item', itemSchema);
