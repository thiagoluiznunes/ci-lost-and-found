import signup from './signup';
import login from './login';
import validate from './token';
import forgot from './forgot';

class UserService {
  constructor() {
    this.signup = signup;
    this.login = login;
    this.validateToken = validate;
    this.forgotPassword = forgot;
  }
}

export default UserService;
