import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';

export class CreateUserPostTask {
  private static _instance: CreateUserPostTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
  }

  public async execute(req: Request, res: Response): Promise<any> {
    try {
      const user = await this.userDatabase.findById(req.params.id);
      const post = await user.createPost({
        color: req.query.color,
        title: req.query.title,
        description: req.query.description,
        tags: [{
          name: req.query.tagName,
          color: req.query.tagColor
        }]
      });

      const tag = await post.createTag({
        name: req.query.tagName,
        color: req.query.tagColor,
      });

      return res.status(201).json(post);
    }
    catch (err) {
      return res.status(500).json(err);
    }
  };

  public static getInstance(): CreateUserPostTask {
     return this._instance || (this._instance = new this());
  };
};
