const app = require('./app');
require('dotenv').config();

const { middlewaresError } = require('./middlewares/erroMiddleware');
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use(middlewaresError);
app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
