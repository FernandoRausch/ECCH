import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import Usuarios from "../models/usuariosSchema.js";

passport.use(
  "registro",
  new LocalStrategy(
    {
      usernameField: "nombre",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, nombre, password, done) => {
      const usuarioBD = await Usuarios.findOne({ nombre });
      if (usuarioBD) {
        return done(null, false);
      }
      const usuarioNuevo = new Usuarios();
      usuarioNuevo.nombre = nombre;
      usuarioNuevo.contrasena = usuarioNuevo.encriptar(password)
      usuarioNuevo.correo = req.body.email;
      usuarioNuevo.direccion = req.body.direccion;
      usuarioNuevo.edad = req.body.edad;
      usuarioNuevo.telefono = req.body.telefono;
      usuarioNuevo.avatar = req.body.avatar;
      await usuarioNuevo.save();
      done(null, usuarioNuevo);
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "nombre",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, nombre, password, done) => {
      const usuarioBD = await Usuarios.findOne({ nombre });
      if (!usuarioBD) {
        return done(null, false);
      }
      done(null, usuarioBD);
    }
  )
);

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  const usuario = await Usuarios.findById(id);
  done(null, usuario);
});
