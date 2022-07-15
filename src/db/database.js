import mongoose from "mongoose";

mongoose.connect(
    'mongodb+srv://Rausch:123654@cluster0.apqg8hx.mongodb.net/passportMongoAtlas?retryWrites=true&w=majority'
)
.then(response=>console.log('Conectado a la base de datos'))
.catch(err=>console.log(err))