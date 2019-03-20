import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';

export class GetUsersTask {
  private static _instance: GetUsersTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
  }

  public execute(req: Request, res: Response): any {
    return this.userDatabase.findAll()
      .then((users: UserInstance[]) => {
        return res.status(200).json({ users });
      })
      .catch(err => res.status(500).json(err));
  };

  public static getInstance(): GetUsersTask {
     return this._instance || (this._instance = new this());
  };
};
