import express from "express";
import apiRoutes from "./routes/apiRoutes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import "./config/mongo-config.js";
import "./config/passport-config.js";
import passport from "passport";
import "dotenv/config";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import compression from "compression";
const app = express();
const yargs2 = yargs(hideBin(process.argv));

const args = yargs2
  .alias({ p: "PORT" })
  .default({ p: process.env.PORT || 8080 }).argv;

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "secret",
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0.apqg8hx.mongodb.net/sessionMongoAtlas?retryWrites=true&w=majority`,
    }),
  })
);
app.use("/", apiRoutes);
app.use(passport.initialize());
app.use(passport.session());

app.listen(args.PORT, () => {
  console.log(`Escuchando el puerto ${args.PORT}`);
});
