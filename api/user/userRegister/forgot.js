import jwt from 'jsonwebtoken';
import env from '../../../dotenv';
import errors from './errors';
import sendEmail from './email';
import User from './user';

const emailRegex = /\S+@\S+\.\S+/;

const forgotPassword = (req, res) => {
  const email = req.body.email || '';
  if (!email.match(emailRegex)) {
    return res.status(400).send({ errors: ['Email invalid!'] });
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      return errors.sendErrorsFromDB(res, err);
    } else if (user) {
      const token = jwt.sign(user.toJSON(), env.authSecret, {
        expiresIn: '5 minute' });
      user.resetPasswordToken = token;


      user.save((err) => {
        if (err) {
          return errors.sendErrorsFromDB(res, err);
        }
        res.status(200).send('Token updated');
        sendEmail(req, email, token);
      });
    } else {
      return res.status(400).send({ errors: ['Email not found'] });
    }
  });
};

export default forgotPassword;
