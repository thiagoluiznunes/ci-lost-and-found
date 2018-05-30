import signup from './signup';
import login from './login';
import validate from './token';

class UserService {
  constructor() {
    this.signup = signup; 
    this.login = login;
    this.validateToken = validate;
  }
}

export default UserService;
