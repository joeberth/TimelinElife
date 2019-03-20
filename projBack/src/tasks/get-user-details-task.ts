import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';

export class GetUserDetailsTask {
  private static _instance: GetUserDetailsTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
  }

  public async execute(req: Request, res: Response): Promise<any> {
    try {
      const user: UserInstance = await this.userDatabase.findById(req.params.id);
      return res.status(202).send(user);
    }
    catch (err) {
      return res.status(500).json(err);
    }
  };

  public static getInstance(): GetUserDetailsTask {
     return this._instance || (this._instance = new this());
  };
};
