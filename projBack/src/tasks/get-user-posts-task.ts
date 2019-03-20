import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';

export class GetUserPostsTask {
  private static _instance: GetUserPostsTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
  }

  public execute(req: Request, res: Response): any {
    return this.userDatabase.findById(req.params.id)
      .then(user => user.getPosts())
        .then(posts =>
          res.status(200).json({ posts })
        )
        .catch(err => res.status(500).json(err))
  };

  public static getInstance(): GetUserPostsTask {
     return this._instance || (this._instance = new this());
  };
};
