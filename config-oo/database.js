'use strict';

class DataBase {
  constructor() {
    const mongoose = require('mongoose');

    this.dbConnection = () => {
      return mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds153198.mlab.com:53198/db_ci-lost-and-found',
        {useMongoClient: true}
      );
    };
  }
}

module.exports = DataBase;
