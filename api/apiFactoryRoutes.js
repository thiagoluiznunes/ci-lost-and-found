import ItemPostRoutes from './item/itemPost/itemRoutes';
import ItemArticleRoutes from './item/itemArticle/itemRoutes';
import UserRegisterRoutes from './user/userRegister/userRoutes';
import UserFacebookRoutes from './user/userFacebook/userRoutes';

class ApiFactoryRoutes {
  constructor() {
    this.createRoutesClass = (option) => {
      // By default
      // const routesClass = undefined;

      switch (option) {
        case 'post':
          return new ItemPostRoutes();
          // break;

        case 'article':
          return new ItemArticleRoutes();
          // break;

        case 'register':
          return new UserRegisterRoutes();
          // break;

        case 'facebook':
          return new UserFacebookRoutes();
          // break;

        default:
          // statements_def
          return null;
          // break;
      }
      // return routesClass;
    };
  }
}

export default ApiFactoryRoutes;
