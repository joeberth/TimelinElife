import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../utils/sequelize-attributes-type';

export interface TagAttributes {
  id?: number;
  name: string;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface TagInstance extends Sequelize.Instance<TagAttributes>, TagAttributes {
};

export const TagFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<TagInstance, TagAttributes> => {
  const attributes: SequelizeAttributes<TagAttributes> = {
    name: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
  };

  const Tag = sequelize.define<TagInstance, TagAttributes>('Tag', attributes);

  return Tag;
};
