import restful from 'node-restful';

const mongoose = restful.mongoose;

class Item extends mongoose.Schema {
  constructor() {
    super({
      type: { type: String, required: [true, 'Informe a opção achado/perdido.'] },
      description: { type: String, required: [true, 'Informe a descrição do objeto.'] },
      name: { type: String, required: [true, 'Informe seu nome.'] },
      contact: { type: String, required: [true, 'Informe seu contato.'] },
      date: { type: String, required: [true, 'Informe a data.'] } });
  }
}

export default restful.model('Item', new Item());
