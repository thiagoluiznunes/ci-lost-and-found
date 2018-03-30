const restful = require('node-restful');
const mongoose = restful.mongoose;

const itemSchema = new mongoose.Schema({
  type: {type: String, required: [true, 'Informe a opção achado/perdido.']},
  description: {type: String, required:
    [true, 'Informe a descrição do objeto.']},
  name: {type: String, required: [true, 'Informe seu nome.']},
  contact: {type: String, required: [true, 'Informe seu contato.']},
  date: {type: String, required: [true, 'Informe a data.']}});

module.exports = restful.model('Item', itemSchema);
