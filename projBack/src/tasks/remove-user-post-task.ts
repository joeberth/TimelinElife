import Sequelize from 'sequelize';
import { Request, Response } from 'express';

import { DataBase } from '../models/database';
import { UserAttributes, UserInstance } from '../models/user';
import { PostAttributes, PostInstance } from '../models/post';

export class RemoveUserPostTask {
  private static _instance: RemoveUserPostTask;
  private userDatabase: Sequelize.Model<UserInstance, UserAttributes>;
  private postDatabase: Sequelize.Model<PostInstance, PostAttributes>;

  public constructor() {
    this.userDatabase = DataBase.getInstance().getDatabase().User;
    this.postDatabase = DataBase.getInstance().getDatabase().Post;
  }

  public async execute(req: Request, res: Response): Promise<any> {
    const post: PostInstance = await this.postDatabase.findById(req.params.postId);
    const user: UserInstance = await this.userDatabase.findById(req.params.id);

    await user.removePost(post)
    .then(() => {
      return res.status(204).send();
    })
    .catch(err => res.status(500).json(err));
  };

  public static getInstance(): RemoveUserPostTask {
     return this._instance || (this._instance = new this());
  };
};
