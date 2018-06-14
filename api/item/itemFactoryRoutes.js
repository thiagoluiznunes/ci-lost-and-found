import ItemPostRoutes from './itemPost/itemRoutes';
import ItemArticleRoutes from './itemArticle/itemRoutes';

class ItemFactoryRoutes {
  constructor() {
    this.createRoutesClass = (option) => {
      // By default
      const itemRoutesClass = new ItemPostRoutes();

      switch (option) {
        case 'post':
          this.itemRoutesClass = new ItemPostRoutes();
          break;

        case 'article':
          this.itemRoutesClass = new ItemArticleRoutes();
          break;
        default:
          // statements_def
          break;
      }
      return itemRoutesClass;
    };
  }
}

export default ItemFactoryRoutes;
