import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const usuarioSchema = new mongoose.Schema({
    nombre:String,
    contrasena:String,
    correo:String
})
usuarioSchema.methods.encriptar = (contrasena)=>{
    return bcrypt.hashSync(contrasena,bcrypt.genSaltSync(5))
}



export default mongoose.model('usuarios',usuarioSchema)