import * as Sequelize from 'sequelize';
import { PostAttributes, PostInstance } from 'models/post';
import { SequelizeAttributes } from '../utils/sequelize-attributes-type';

export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  posts?: PostAttributes[] | PostAttributes['id'][];
};

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
  getPosts: Sequelize.HasManyGetAssociationsMixin<PostInstance>;
  createPost: Sequelize.HasManyCreateAssociationMixin<PostAttributes, PostInstance>;
  updatePost: Sequelize.HasManySetAssociationsMixin<PostInstance, PostInstance['id']>;
  removePost: Sequelize.HasManyRemoveAssociationMixin<PostInstance, PostInstance['id']>;
  countPosts: Sequelize.HasManyCountAssociationsMixin;
};

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UserInstance, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  };

  const User = sequelize.define<UserInstance, UserAttributes>('User', attributes);

  User.associate = models => {
    User.hasMany(models.Post, { foreignKey: 'AuthorId', as: 'posts' });
  };

  return User;
};
