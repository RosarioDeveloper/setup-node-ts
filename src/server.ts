import app from './app';

/*
  Inicialização do servidor
  Porta: 3000
 */

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor na porta: ${port}`);
});
