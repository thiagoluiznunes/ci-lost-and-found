import User from './user';

class UserQuerys {
  constructor() {
    this.findUser = (param) => {
      User.findOne({ param }, (err, user) => {
        if (err) {
          return { data: user, status: false };
        }
        return { data: user, status: true };
      });
    };

    this.addUser = (user) => {
      user.save((err) => {
        if (err) {
          return false;
        }
        return true;
      });
    };
  }
}

export default UserQuerys;
