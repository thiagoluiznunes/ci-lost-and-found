import mongoose from 'mongoose';
import bluebird from 'bluebird';

class MongoClass {
  constructor() {
    this.dbConnection = () => {
      mongoose.Promise = bluebird;
      mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds233739.mlab.com:33739/ci-database', { useMongoClient: true });
      console.log('MongoDB connected!');
    };
  }
}

export default MongoClass;
