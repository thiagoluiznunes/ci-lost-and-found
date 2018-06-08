import ItemPostRoutes from './itemPost/itemRoutes';
import ItemArticleRoutes from './itemArticle/itemRoutes';

class ItemFactoryRoutes {
  constructor() {
    // By default
    const userRoutesClass = new ItemPostRoutes();

    this.createRoutesClass = (option) => {
      switch (option) {
        case 'post':
          this.userRoutesClass = new ItemPostRoutes();
          break;

        case 'article':
          this.userRoutesClass = new ItemArticleRoutes();
          break;
        default:
          // statements_def
          break;
      }
      return userRoutesClass;
    };
  }
}

export default ItemFactoryRoutes;
