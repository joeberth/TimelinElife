import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { PostAttributes, PostInstance } from '../models/post';

export class GetPostDetailsTask {
  private static _instance: GetPostDetailsTask;
  private userDatabase: Sequelize.Model<PostInstance, PostAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().Post;
  }

  public async execute(req: Request, res: Response): Promise<any> {
    try {
      const post: PostInstance = await this.userDatabase.findById(req.params.id);
      return res.status(202).send(post);
    }
    catch (err) {
      return res.status(500).json(err);
    }
  };

  public static getInstance(): GetPostDetailsTask {
     return this._instance || (this._instance = new this());
  };
};
