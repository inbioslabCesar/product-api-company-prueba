import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "moderator"];

const roleSchema = new Schema(
  {
    username: String,
  },
  {
    versionKey: false,
  }
);
export default model("Role", roleSchema);

//cada roles se gurdara en una coleccion con un nombre
