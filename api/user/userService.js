import SignUp from './signup';
import Login from './login';

class UserService {
  constructor() {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /.{6,12}/;

    const userSignUp = new SignUp(emailRegex, passwordRegex);
    const userLogin = new Login();

    this.signup = userSignUp.signup;
    this.login = userLogin.login;
  }
}

export default UserService;
