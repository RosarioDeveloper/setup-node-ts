import app from './config/app';

/*
  Inicialização do servidor
  Porta: 3000
 */

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor na porta: ${port}`);
});
