import MongoClass from "../daos/mongoDBClass.js";
import { usuariosSchema } from "../models/usuariosSchema.js";

export class MongoDBUsuarios extends MongoClass {
  constructor() {
    super("usuarios", usuariosSchema);
  }

  async findByEmail(email) {
    try {
      const usuario = await this.collection.findOne({ email: email });
      return usuario;
    } catch (err) {
      throw new Error(err);
    }
  }
}