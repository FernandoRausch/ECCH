import express from 'express'
import apiRoutes from './src/routes/apiRoutes.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import './src/db/database.js'
import './src/passport/local.js'
import passport from 'passport'
const app = express()

app.set('views','./src/views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:'secret',
    store: MongoStore.create({mongoUrl:'mongodb+srv://Rausch:123654@cluster0.apqg8hx.mongodb.net/sessionMongoAtlas?retryWrites=true&w=majority'})
}))
app.use('/',apiRoutes)
app.use(passport.initialize())
app.use(passport.session())


const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})