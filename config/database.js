import TargetDatabase from './db-adapter/target-db';

/**
 * Adapter Design Patterns
 */
const initConnection = (type) => {
  const db = new TargetDatabase(type);
  db.dbConnection();
};

export default { initConnection };
