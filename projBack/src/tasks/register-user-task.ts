import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';

export class RegisterUserTask {
  private static _instance: RegisterUserTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
  }

  public execute(req: Request, res: Response): any {
    const user: UserAttributes = {
      name: req.query.name,
      email: req.query.email,
      username: req.query.username,
      password: req.query.password,
      posts: [],
    }

    return this.userDatabase.create(user)
      .then(() => {
        return res.status(201).send();
      })
      .catch(err => res.status(500).json(err));
  };

  public static getInstance(): RegisterUserTask {
     return this._instance || (this._instance = new this());
  };
}
