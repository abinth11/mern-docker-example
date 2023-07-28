import express, { Application, NextFunction } from "express";
import connectDB from "./frameworks/database/mongodb/connection";
import http from "http";
import serverConfig from "./frameworks/webserver/server";
import expressConfig from "./frameworks/webserver/express";
import routes from "./frameworks/webserver/routes";
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/error-handle";
import AppError from "./utils/app-error";

const app: Application = express();
const server = http.createServer(app);

//* connecting mongoDb
connectDB();

//* express config connection
expressConfig(app);

//* routes for each endpoint
routes(app);

//* handles server side errors
app.use(errorHandlingMiddleware);

//* catch 404 and forward to error handler
app.all("*", (req, res, next: NextFunction) => {
  next(new AppError("Not found", 404));
});

//* starting the server with server config
serverConfig(server).startServer()