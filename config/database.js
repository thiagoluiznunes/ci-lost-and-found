import mongoose from 'mongoose';

export default mongoose.connect('mongodb://thiagoluiznunes:thiagoluizti1606@ds153198.mlab.com:53198/db_ci-lost-and-found', { useMongoClient: true });

mongoose.Error.messages.general.required = 'O atributo {PATH} é obrigatório.';
