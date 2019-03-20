import Sequelize from 'sequelize';

import { UserFactory } from './user';
import { PostFactory } from './post';
import { TagFactory } from './tag';
import { IDatabase } from './database.interface';

const sequelizeConfig = require('../config/sequelizeConfig.json');

export class DataBase {
  private _dataBase: IDatabase;
  private static _instance: DataBase;

  private constructor() {
  }

  public static getInstance(): DataBase {
    return this._instance || (this._instance = new this());
  }

  public getDatabase(): IDatabase {
    return this._dataBase || this.createDatabase();
  }

  public createDatabase(): IDatabase {
    this._dataBase = this._createModels();
    this._dataBase.sequelize.sync();
    return this._dataBase;
  }

  private _createModels() {
    const { database, username, password, params } = sequelizeConfig;
    const sequelize = new Sequelize(database, username, password, params);

    const db: IDatabase = {
      sequelize,
      Sequelize,
      Post: PostFactory(sequelize, Sequelize),
      User: UserFactory(sequelize, Sequelize),
      Tag: TagFactory(sequelize, Sequelize),
    };

    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    return db;
  }
}
