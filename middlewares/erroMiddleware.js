const erroHandler = (codeStatus, erroMessage) => ({
    status: codeStatus,
    message: erroMessage,
  });

  const middlewaresError = (err, _req, res, _next) => {
    if (err.status) {
      return res.status(err.status).json(err.message);
    }
    return res.status(500).json(err.message);
  };

module.exports = {
  erroHandler,
  middlewaresError,
};