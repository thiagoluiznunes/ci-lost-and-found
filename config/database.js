/**
 * Adapter Design Patterns
 */

const mongoDBConnection = () => {
  mongoose.Promise = bluebird;
  mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds233739.mlab.com:33739/ci-database', { useMongoClient: true });
  console.log('MongoDB connected!');
};

const mySQLConnection = () => {
  console.log('MySQL connected!');
};

const postgreSQLConnection = () => {
  console.log('PostgresSQL connected!');
};

const dbConnection = (type) => {
  switch (type) {
    case 'mongodb':
      mongoDBConnection();
      break;
    case 'mysql':
      mySQLConnection();
      break;
    case 'postgres':
      postgreSQLConnection();
      break;
    default:
      // statements_def
      break;
  }
};

export default { dbConnection };
