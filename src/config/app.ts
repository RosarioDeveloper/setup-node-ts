import express from 'express';
import cors from 'cors';
import RouteServiceProvider from '@/Providers/RouteServiceProvider';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.providers();
  }

  /*
    Call all app Middlewares
  */
  private middlewares() {
    this.express.use(
      express.json(),
      express.urlencoded({ extended: false }),
      cors(),
    );
  }

  /*
    Call all app Providers
  */
  private providers(){
    RouteServiceProvider.boot(this.express)
  }
}

export default new App().express;

