const app = require('./app');
require('dotenv').config();
const router = require('./routes/index');
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
