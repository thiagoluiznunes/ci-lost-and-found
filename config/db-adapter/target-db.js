import MongoAdapter from './mongo-adapter';
import MySqlAdapter from './mysql-adapter';
import PostgresAdapter from './postgres-adapter';

/**
 * Adapter Design Patterns
 */
class TargetDataBase {
  constructor(type) {
    let result;

    switch (type) {
      case 'mongodb':
        result = new MongoAdapter();
        break;
      case 'mysql':
        result = new MySqlAdapter();
        break;
      case 'postgres':
        result = new PostgresAdapter();
        break;
      default:
        result = null;
    }
    return result;
  }
}

export default TargetDataBase;
