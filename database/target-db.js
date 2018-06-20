import MongoClass from './mongo-class';
import MySqlClass from './mysql-class';
import PostgresClass from './postgres-class';

class TargetDataBase {
  constructor(type) {
    let result;

    switch (type) {
      case 'mongodb':
        result = new MongoClass();
        break;
      case 'mysql':
        result = new MySqlClass();
        break;
      case 'postgres':
        result = new PostgresClass();
        break;
      default:
        result = null;
    }
    return result;
  }
}

export default TargetDataBase;
