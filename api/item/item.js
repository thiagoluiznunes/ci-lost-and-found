const restful = require('node-restful');
const mongoose = restful.mongoose;

const itemSchema = new mongoose.Schema({
  type: {type: String, required: true},
  description: {type: String, required: true},
  name: {type: String, required: true},
  contact: {type: String, required: true},
  data: {type: String, required: true}});

module.exports = restful.model('Item', itemSchema);
