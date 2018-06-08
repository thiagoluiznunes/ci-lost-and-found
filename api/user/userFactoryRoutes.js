import UserRegisterRoutes from './userRegister/userRoutes';
import UserFacebookRoutes from './userFacebook/userRoutes';

class UserFactoryRoutes {
  constructor() {
    // By default
    const userRoutesClass = new UserRegisterRoutes();

    this.createRoutesClass = (option) => {
      switch (option) {
        case 'register':
          this.userRoutesClass = new UserRegisterRoutes();
          break;

        case 'facebook':
          this.userRoutesClass = new UserFacebookRoutes();
          break;
        default:
          // statements_def
          break;
      }
      return userRoutesClass;
    };
  }
}

export default UserFactoryRoutes;
