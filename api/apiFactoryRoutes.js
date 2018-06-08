import UserRegisterRoutes from './user/userRegister/userRoutes';
import UserFacebookRoutes from './user/userFacebook/userRoutes';
import ItemPostRoutes from './item/itemPost/itemRoutes';
import ItemArticleRoutes from './item/itemArticle/itemRoutes';

class ApiFactoryRoutes {
  constructor() {
    this.createItemRoutes = (option) => {
      const userRoutes = new ItemPostRoutes();

      switch (option) {
        case 'post':
          this.userRoutes = new ItemPostRoutes();
          break;

        case 'article':
          this.userRoutes = new ItemArticleRoutes();
          break;
        default:
          // statements_def
          break;
      }
      return userRoutes;
    };

    this.createUserRoutes = (option) => {
      const userRoutes = new UserRegisterRoutes();

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

export default ApiFactoryRoutes;
