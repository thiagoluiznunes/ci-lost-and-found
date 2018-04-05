import mongoose from 'mongoose';
import bluebird from 'bluebird';

class DataBase {
  constructor() {
    mongoose.Promise = bluebird;
    mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds233739.mlab.com:33739/ci-database', { useMongoClient: true });

    this.dbConnection = () => mongoose;
  }
}

export default DataBase;
