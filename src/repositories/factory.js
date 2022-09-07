import dotenv from "dotenv";
dotenv.config();
let usuariosDao;

switch (process.env.DB_CONNECTION) {
  case "mongoDB":
    import("./usuariosRepo.js").then(({ MongoDBUsuarios }) => {
      usuariosDao = new MongoDBUsuarios();
    });
    break;

  default:
    throw new Error("No se ha definido una conexión a la base de datos");
    break;
}

export { usuariosDao };