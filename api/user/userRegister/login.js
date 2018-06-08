import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './user';
import env from '../../../dotenv';

const login = (req, res) => {
  const email = req.body.email || '';
  const password = req.body.password || '';

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).send({ message: err });
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user.toJSON(), env.authSecret, { expiresIn: '1 minute' });
      const { name, email } = user;

      res.json({ name, email, token });
    } else {
      return res.status(400).send({ errors: 'Usuário/Senha inválidos' });
    }
  });
};

export default login;
