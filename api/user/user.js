import restful from 'node-restful';

const mongoose = restful.mongoose;

class User extends mongoose.Schema {
  constructor() {
    super({
      name: { type: String, required: [true, 'Informe o nome.'] },
      username: { type: String, required: [true, 'Informe o login.'] },
      password: { type: String, required: [true, 'Informe a senha.'] },
      contact: { type: String, required: [true, 'Informe seu contato.'] } });
  }
}

export default restful.model('User', new User());
