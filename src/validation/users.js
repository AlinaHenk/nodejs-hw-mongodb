import Joi from 'joi';
import { emailRegexp } from '../constants/users.js';

export const userSignUpShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(4).required(),
});

// password - обов’язково (памʼятайте, що пароль має бути захешованим за допомогою бібліотеки bcrypt)
