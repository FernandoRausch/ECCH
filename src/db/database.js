import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(
    `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0.apqg8hx.mongodb.net/passportMongoAtlas?retryWrites=true&w=majority`
)
.then(response=>console.log('Conectado a la base de datos'))
.catch(err=>console.log(err))