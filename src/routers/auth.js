import { Router } from 'express';

import * as authControllers from '../controllers/auth.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import { userSignUpShema, userSignInShema } from '../validation/users.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userSignUpShema),
  ctrlWrapper(authControllers.signupController),
);

authRouter.post(
  '/login',
  validateBody(userSignInShema),
  ctrlWrapper(authControllers.signinController),
);

authRouter.post('/refresh', ctrlWrapper(authControllers.refreshController));

export default authRouter;
