const mongoose = require('mongoose');
module.exports =
  mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds153198.mlab.com:53198/db_ci-lost-and-found',
    {useMongoClient: true}
  );
