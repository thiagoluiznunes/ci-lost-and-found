import bcrypt from 'bcrypt';
import User from './user';

class SignUp {
  constructor(emailRegex, passwordRegex) {
    this.signup = (req, res) => {
      const name = req.body.name || '';
      const email = req.body.email || '';
      const contact = req.body.contact || '';
      const password = req.body.password || '';
      const confirmPassword = req.body.confirm_password || '';

      if (!email.match(emailRegex)) {
        return res.status(400).send({ message: 'Email inválido!' });
      }
      if (!password.match(passwordRegex)) {
        return res.status(400).send({ message: 'A senha deve conter entre 6 a 12 elementos!' });
      }

      const salt = bcrypt.genSaltSync();
      const passwordHash = bcrypt.hashSync(password, salt);

      if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({ message: 'Senhas não conferem!' });
      }

      User.findOne({ email }, (err, user) => {
        if (err) return res.status(400).send({ message: 'Erro de busca!' });
        else if (user) return res.status(400).send({ errors: 'Usuário já cadastrado!' });

        const newUser = new User({ name, email, password: passwordHash, contact });
        newUser.save((err) => {
          if (err) {
            return res.status(400).send({ message: err });
          }
          return res.status(200).send({ data: true, message: 'Registro realizado com sucesso!' });
        });
      });
    };
  }
}

export default SignUp;
