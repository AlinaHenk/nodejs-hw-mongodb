const errorHandler = (error, req, res, next) => {
  const { status = 500, data } = error;
  res.status(status).json({
    message: 'Something went wrong',
    data,
  });
};

export default errorHandler;
