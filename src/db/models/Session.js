import { Schema, model } from 'mongoose';
import { handleSaveError, setUpdateOptions } from './hooks.js';

// const SessionShema = new Schema(
//   {
//     userId: {
//       type: String,
//       required: true,
//     },
//accessToken: {
//       type: String,
//       required: true,
//     },
// refreshToken: {
//       type: String,
//       required: true,
//     },
//accessTokenValidUntil: {
//       type: Date,
//       required: true,
//     },
//
//     refreshTokenValidUntil: {
//       type: Date,
//       required: true,
//     },
//   },
//   { versionKey: false, timestamps: true },
// );

// const SessionCollection = model('session', SessionShema);

// export default SessionCollection;
