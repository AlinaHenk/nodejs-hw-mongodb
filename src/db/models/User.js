import { Schema, model } from 'mongoose';
import { handleSaveError, setUpdateOptions } from './hooks.js';
import { emailRegexp } from '../../constants/users.js';

const userShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: emailRegexp,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userShema.post('save', handleSaveError);
userShema.pre('findOneAndUpdate', setUpdateOptions);
userShema.post('findOneAndUpdate', handleSaveError);

const UserCollection = model('user', userShema);

export default UserCollection;
