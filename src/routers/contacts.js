import { Router } from 'express';

import * as ContactControllers from '../controllers/contacts.js';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';
import { contactPostShema, contactPatchShema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import authenticate from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get(
  '/',
  ctrlWrapper(ContactControllers.getAllContactsController),
);

contactsRouter.get(
  '/:id',
  isValidId,
  ctrlWrapper(ContactControllers.getContactByIdController),
);

contactsRouter.post(
  '/',
  upload.single('photo'),
  validateBody(contactPostShema),
  ctrlWrapper(ContactControllers.addContactController),
);

contactsRouter.patch(
  '/:id',
  isValidId,
  upload.single('photo'),
  validateBody(contactPatchShema),
  ctrlWrapper(ContactControllers.patchContactController),
);

contactsRouter.delete(
  '/:id',
  isValidId,
  ctrlWrapper(ContactControllers.deleteContactController),
);

export default contactsRouter;
