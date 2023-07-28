import { Application } from 'express';
import userRouter from './quotes';


const routes = (app: Application) => {
  app.use('/api/v1/quotes', userRouter());
  
};

export default routes;