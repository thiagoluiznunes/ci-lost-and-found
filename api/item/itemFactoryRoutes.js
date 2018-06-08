import ItemPostRoutes from './itemPost/itemRoutes';
import ItemArticleRoutes from './itemArticle/itemRoutes';

class ItemFactoryRoutes {
  constructor() {
    const itemRoutes = new ItemPostRoutes();

    this.createItemRoutes = (option) => {
      switch (option) {
        case 'post':
          this.itemRoutes = new ItemPostRoutes();
          break;

        case 'article':
          this.itemRoutes = new ItemArticleRoutes();
          break;
        default:
          // statements_def
          break;
      }
      return itemRoutes;
    };
  }
}

export default ItemFactoryRoutes;
