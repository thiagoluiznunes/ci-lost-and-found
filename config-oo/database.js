import mongoose from 'mongoose';

class DataBase {
  constructor() {
    this.dbConnection = () => mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds233739.mlab.com:33739/ci-database', { useMongoClient: true });
  }
}

export default DataBase;
