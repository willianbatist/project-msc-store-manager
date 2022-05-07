const erroHandler = (codeStatus, erroMessage) => ({
    status: codeStatus,
    message: erroMessage,
  });

module.exports = {
  erroHandler,
};