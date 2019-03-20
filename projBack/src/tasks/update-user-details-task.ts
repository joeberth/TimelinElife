import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';

export class UpdateUserDetailsTask {
  private static _instance: UpdateUserDetailsTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
  }

  public async execute(req: Request, res: Response): Promise<any> {
    const where = { where: { id: req.params.id } };
    const user: UserAttributes = {
      name: req.query.name,
      email: req.query.email,
      username: req.query.username,
      password: req.query.password,
    };

    this.userDatabase.update(user, where)
    .then(() => {
      return res.status(200).send();
    })
    .catch(err => res.status(500).json(err));
  };

  public static getInstance(): UpdateUserDetailsTask {
     return this._instance || (this._instance = new this());
  };
};
