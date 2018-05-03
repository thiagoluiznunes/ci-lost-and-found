import SignUp from './signup';
import Login from './login';
import Token from './token';

class UserService {
  constructor() {
    const userSignUp = new SignUp();
    const userLogin = new Login();
    const token = new Token();

    this.signup = userSignUp.signup;
    this.login = userLogin.login;
    this.validateToken = token.validate;
  }
}

export default UserService;
