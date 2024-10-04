import createHttpError, { HttpError } from 'http-errors';

export const validateBody = (shema) => {
  const func = async (req, res, next) => {
    try {
      await shema.validateAsync(req.body);
      next();
    } catch (error) {
      const validateError = createHttpError(400, error.message);
      next();
    }
  };
  return func;
};
