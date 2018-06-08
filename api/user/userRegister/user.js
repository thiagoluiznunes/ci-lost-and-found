import restful from 'node-restful';

const mongoose = restful.mongoose;

class User extends mongoose.Schema {
  constructor() {
    super({
      name: { type: String, required: [true, 'Informe o nome.'] },
      email: { type: String, required: [true, 'Informe o email.'] },
      password: { type: String, required: [true, 'Informe a senha.'] },
      resetPasswordToken: { type: String } });
  }
}

export default restful.model('User', new User());
