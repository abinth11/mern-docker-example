import { Application } from 'express';
import userRouter from './user';


const routes = (app: Application) => {
  app.use('/api/v1/user', userRouter());
  
};

export default routes;