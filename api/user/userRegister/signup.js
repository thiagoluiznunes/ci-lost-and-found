import bcrypt from 'bcrypt';
import errors from './errors';
import User from './user';

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /.{6,12}/;

const signup = (req, res) => {
  const name = req.body.name || '';
  const email = req.body.email || '';
  const password = req.body.password || '';
  const confirmPassword = req.body.confirm_password || '';

  if (!email.match(emailRegex)) return res.status(400).send({ errors: ['Email inválido!'] });
  if (!password.match(passwordRegex)) return res.status(400).send({ errors: ['A senha deve conter entre 6 a 12 elementos!'] });

  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);

  if (!bcrypt.compareSync(confirmPassword, passwordHash)) return res.status(400).send({ errors: ['Senhas não conferem!'] });

  User.findOne({ email }, (err, user) => {
    if (err) return errors.sendErrorsFromDB(res, err);
    else if (user) return res.status(400).send({ errors: ['Email já cadastrado!'] });

    const newUser = new User({ name, email, password: passwordHash });
    newUser.save((err) => {
      if (err) return errors.sendErrorsFromDB(res, err);
      return res.status(200).send({ data: true, errors: ['Registro realizado com sucesso!'] });
    });
  });
};

export default signup;
