import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userQuerys from './userQuerys';
import User from './user';
import env from '../../dotenv';

class UserService {
  constructor() {
    this.emailRegex = /\S+@\S+\.\S+/;
    this.passwordRegex = /.{6,12}/;

    this.signup = (req, res) => {
      const name = req.body.name || '';
      const email = req.body.email || '';
      const password = req.body.password || '';
      const confirmPassword = req.body.confirm_password || '';

      if (!email.match(this.emailRegex)) {
        return res.status(400).send({ message: 'Email inválido!' });
      }
      if (!password.match(this.passwordRegex)) {
        return res.status(400).send({ message: 'A senha deve conter entre 6 a 12 elementos!' });
      }

      const salt = bcrypt.genSaltSync();
      const passwordHash = bcrypt.hashSync(password, salt);

      if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({ message: 'Senhas não conferem!' });
      }

      if (!userQuerys.findUser(email).status) {
        const newUser = new User({ name, email, password: passwordHash });
        if (userQuerys.addUser(newUser)) {
          this.login(req, res);
        }
      }
      return res.status(400).send({ message: 'Erro ao cadastrar!' });
    };

    this.login = (req, res) => {
      const param = req.body.email || '';
      const password = req.body.password || '';
      const user = userQuerys.findUser(param);

      if (user.status && bcrypt.compareSync(password, user.data.password)) {
        const token = jwt.sign(user.data, env.authSecret, { expiresIn: '1 day' });

        const { name, email } = user.data;
        res.json({ name, email, token });
      }
      return res.status(400).send({ message: 'Usuário/Senha inválidos!' });
    };
  }
}

export default UserService;
