import SQ from "sequelize";
import { config } from "./envconfig.js";

const { host, user, database, password } = config.db;

export const SQ_Datatypes = SQ.DataTypes;
export const SQ_Sequlize = SQ.Sequelize;

export const sqHelper = new SQ.Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  //   logging: false,
});
