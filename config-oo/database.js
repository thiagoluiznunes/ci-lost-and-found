'use strict';

class DataBase {
  constructor() {
    const mongoose = require('mongoose');

    this.dbConnection = () => {
      return mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds233739.mlab.com:33739/ci-database',
        {useMongoClient: true}
      );
    };
  }
}

module.exports = DataBase;
