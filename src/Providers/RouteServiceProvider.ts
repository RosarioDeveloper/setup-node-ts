import express from 'express';
import { Route } from '@/routes/api';

class RouteServiceProvider{


  boot(app: express.Application){
    app.use('/api', Route)
    app.use('/api/v2', Route)
  }

}

export default new RouteServiceProvider()
