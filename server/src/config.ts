import dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  MONGO_DB_URL: process.env.DATABASE as string,
  PORT: process.env.PORT,

  DB_NAME: process.env.DB_NAME,

  NODE_ENV: process.env.NODE_ENV as string,
};

export default CONFIG;