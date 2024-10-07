import { Router } from 'express';

import * as authControllers from '../controllers/auth.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import { userSignUpShema } from '../validation/users.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userSignUpShema),
  ctrlWrapper(authControllers.signupController),
);

export default authRouter;
