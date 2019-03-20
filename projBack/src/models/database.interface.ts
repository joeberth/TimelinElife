import * as Sequelize from 'sequelize';

import { PostAttributes, PostInstance } from 'models/post';
import { UserAttributes, UserInstance } from 'models/user';
import { TagAttributes, TagInstance } from 'models/tag';

export interface IDatabase {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Post: Sequelize.Model<PostInstance, PostAttributes>;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Tag: Sequelize.Model<TagInstance, TagAttributes>;
};
