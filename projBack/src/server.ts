import express from 'express';

import { RouterRegister } from "./routes/router-register";
import { DataBase } from './models/database';

export class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.app.use(RouterRegister.register());
    this.app.set("port", 3000);
    DataBase.getInstance().createDatabase();
  }
}

export default Server;
