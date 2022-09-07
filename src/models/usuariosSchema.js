import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre:String,
    contrasena:String,
    correo:String,
    direccion:String,
    edad:Number,
    telefono:String,
    avatar:String
})

usuarioSchema.methods.encriptar = (contrasena)=>{
    return bcrypt.hashSync(contrasena,bcrypt.genSaltSync(5))
}


export default mongoose.model('usuarios',usuarioSchema)