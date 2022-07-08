import express from 'express'
import sessionRoutes from './src/routes/session.js'
import session from 'express-session'
import sessionFileStore from 'session-file-store'

const fileStore =sessionFileStore(session)
const app = express()
app.set('views','./src/views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:'secret',
    store: new fileStore({path:'./sesiones', ttl:60}),
    cookie:{maxAge:60000}
}))
app.use('/',sessionRoutes)
app.get('/',(req,res)=>{
    console.log(req.session.usuario)
    res.send(`Bienvenido ${req.session.usuario}`)
})

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})