import express from 'express';
import cors from 'cors';
import Route from './routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  private middlewares() {
    this.express.use(express.json(), express.urlencoded({ extended: false }), cors(), Route);
  }
}

export default new App().express;
