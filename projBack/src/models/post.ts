import * as Sequelize from 'sequelize';
import { UserAttributes } from 'models/user';
import { TagAttributes, TagInstance } from 'models/tag';
import { SequelizeAttributes } from '../utils/sequelize-attributes-type';

export interface PostAttributes {
  id?: number;
  title: string;
  color: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  tags?: TagAttributes[] | TagAttributes['id'][]
  author?: UserAttributes | UserAttributes['id'];
};

export interface PostInstance extends Sequelize.Instance<PostAttributes>, PostAttributes {
    getTags: Sequelize.HasManyGetAssociationsMixin<TagInstance>;
    createTag: Sequelize.HasManyCreateAssociationMixin<TagAttributes, TagInstance>;
    removeTag: Sequelize.HasManyRemoveAssociationMixin<TagInstance, TagInstance['id']>;
};

export const PostFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<PostInstance, PostAttributes> => {
  const attributes: SequelizeAttributes<PostAttributes> = {
    title: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING()
    },
    description: {
      type: DataTypes.STRING(5000)
    },
  };

  const Post = sequelize.define<PostInstance, PostAttributes>('Post', attributes);

  Post.associate = models => {
    Post.belongsTo(models.User, { as: 'author', foreignKey: 'AuthorId' });
    Post.hasMany(models.Tag, { foreignKey: 'PostId', as: 'tags' });
  };

  return Post;
};
