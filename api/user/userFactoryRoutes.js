import UserRegisterRoutes from './userRegister/userRoutes';
import UserFacebookRoutes from './userFacebook/userRoutes';

class UserFactoryRoutes {
  constructor() {
    const userRoutes = new UserRegisterRoutes();

    this.createUserRoutes = (option) => {
      switch (option) {
        case 'register':
          this.userRoutes = new UserRegisterRoutes();
          break;

        case 'facebook':
          this.userRoutes = new UserFacebookRoutes();
          break;
        default:
          // statements_def
          break;
      }
      return userRoutes;
    };
  }
}

export default UserFactoryRoutes;
