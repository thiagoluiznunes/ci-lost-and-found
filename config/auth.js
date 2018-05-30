import jwt from 'jsonwebtoken';
import env from '../dotenv';

const protect = (req, res, next) => {
  if (req.method === 'OPTIONS') next();

  const authorization = 'authorization';
  const token = req.body.token || req.query.token || req.headers[authorization];

  if (!token) return res.status(403).send({ errors: ['Nenhum token fornecido.'] });

  jwt.verify(token, env.authSecret, (err) => {
    if (err) return res.status(403).send({ errors: ['Falha ao autenticar token.'] });
    next();
  });
};

export default protect;
