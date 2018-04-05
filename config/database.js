import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;
mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds153198.mlab.com:53198/db_ci-lost-and-found', { useMongoClient: true });

export default mongoose;

mongoose.Error.messages.general.required = 'O atributo {PATH} é obrigatório.';
