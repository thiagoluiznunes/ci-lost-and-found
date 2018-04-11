import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './user';
import env from '../../dotenv';

class Login {
  constructor() {
    this.login = (req, res) => {
      const email = req.body.email || '';
      const password = req.body.password || '';

      User.findOne({ email }, (err, user) => {
        if (err) {
          return res.status(400).send({ message: err });
        } else if (user && bcrypt.compareSync(password, user.password)) {
          const userToken = jwt.sign(user, env.authSecret, { expiresIn: '1 day' });
          const { name, email } = user;

          res.json({ name, email, userToken });
        } else {
          return res.status(400).send({ errors: 'Usuário/Senha inválidos' });
        }
      });
    };
  }
}

export default Login;
