import jwt from 'jsonwebtoken';
import env from '../../dotenv';

class Token {
  constructor() {
    this.validate = (req, res) => {
      const token = req.body.token || '';

      jwt.verify(token, env.authSecret, err => res.status(200).send({ valid: !err }));
    };
  }
}

export default Token;
