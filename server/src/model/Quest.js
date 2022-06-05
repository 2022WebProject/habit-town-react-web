import { sqHelper, SQ_Datatypes } from "../helper/database.js";

const Quest = sqHelper.define("quest", {
  id: {
    type: SQ_Datatypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: SQ_Datatypes.STRING(40),
    allowNull: false,
  },
  created_user_id: {
    type: SQ_Datatypes.INTEGER,
    allowNull: false,
  },
});

export default Quest;
