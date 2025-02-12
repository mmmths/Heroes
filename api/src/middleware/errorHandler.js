const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const response = {
      success: false,
      status: statusCode,
      message: statusCode === 500 ? "Internal Server Error" : err.message,
      errorCode: err.code || "UNKNOWN_ERROR"
  };

  console.error(`❌ [${new Date().toISOString()}] Error:`, {
      message: err.message,
      stack: err.stack,
      path: req.originalUrl,
      method: req.method
  });

  res.status(statusCode).json(response);
};

export default errorHandler;
