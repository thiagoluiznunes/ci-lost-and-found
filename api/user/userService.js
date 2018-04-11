// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './user';
// import env from '../../dotenv';

class UserService {
  constructor() {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /.{6,12}/;

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
        newUser.save((e) => {
          if (e) {
            return res.status(400).send({ message: e });
          }
          return res.status(200).send('OK');
        });
        return undefined;
      });
      return undefined;
    };

    // this.login = (req, res) => {
    //   const param = req.body.email || '';
    //   const password = req.body.password || '';
    //   const user = querys.findUser(param);

    //   if (user.status && bcrypt.compareSync(password, user.data.password)) {
    //     const token = jwt.sign(user.data, env.authSecret, { expiresIn: '1 day' });

    //     const { name, email } = user.data;
    //     res.json({ name, email, token });
    //   }
    //   return res.status(400).send({ message: 'Usuário/Senha inválidos!' });
    // };
  }
}

export default UserService;
