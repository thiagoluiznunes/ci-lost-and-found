import restful from 'node-restful';

const mongoose = restful.mongoose;
const regex = /\S+@\S+\.\S+/;

class UserFacebook extends mongoose.Schema {
  constructor() {
    super({
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: regex },
      facebookProvider: {
        type: { id: String, token: String },
        select: false } });
  }
}

export default restful.model('UserFacebook', new UserFacebook());
