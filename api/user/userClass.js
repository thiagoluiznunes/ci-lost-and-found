import service from './userService';

class UserClass {
  constructor() {
    this.signup = service.sigup;
  }
}

export default UserClass;
