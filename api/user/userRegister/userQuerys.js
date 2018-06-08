import User from './user';

const findUser = (param) => {
  User.findOne({ param }, (err, user) => {
    if (err) {
      return { data: user, status: false };
    }
    return { data: user, status: true };
  });
};

const addUser = (user) => {
  user.save((err) => {
    if (err) {
      return false;
    }
    return true;
  });
};

export default { findUser, addUser };
