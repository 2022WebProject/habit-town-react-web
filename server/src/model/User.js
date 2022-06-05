import { sqHelper, SQ_Datatypes } from "../helper/database.js";

export const User = sqHelper.define("user", {
  id: {
    type: SQ_Datatypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: {
    type: SQ_Datatypes.STRING(40),
    allowNull: false,
  },
  password: {
    type: SQ_Datatypes.STRING(128),
    allowNull: false,
  },
  introduce: {
    type: SQ_Datatypes.STRING(200),
    allowNull: true,
  },
  login_type: {
    type: SQ_Datatypes.STRING(20),
  },
  accepted_quest_id: {
    type: SQ_Datatypes.INTEGER,
    allowNull: true,
  },
});

export default User;
