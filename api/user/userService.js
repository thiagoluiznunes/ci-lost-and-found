import SignUp from './signup';
import Login from './login';

class UserService {
  constructor() {
    const userSignUp = new SignUp();
    const userLogin = new Login();

    this.signup = userSignUp.signup;
    this.login = userLogin.login;
  }
}

export default UserService;
