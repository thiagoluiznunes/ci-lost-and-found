import ItemPostRoutes from './itemPost/itemRoutes';
import ItemArticleRoutes from './itemArticle/itemRoutes';

class ItemFactoryRoutes {
  constructor() {
    const userRoutes = new ItemPostRoutes();

    this.createItemRoutes = (option) => {
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
  }
}

export default ItemFactoryRoutes;
