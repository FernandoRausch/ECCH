import { Router } from "express";
import passport from "passport";
const router = Router()

function isAuth(req,res,next){
    if (req.isAuthenticated()) {
        next()
    } else{
        res.render('login')
    }
}

router.post('/registro', passport.authenticate('registro',{
    failureRedirect:'/errorRegistro',
    successRedirect:'/datos'
}))

router.post('/login', passport.authenticate('login',{
    failureRedirect:'/errorLogin',
    successRedirect:'/info'

}))

router.get('/datos',isAuth,(req, res) => {
    res.render('info',{nombre:req.user.nombre})
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
})

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/registro', (req, res) => {
    res.render('registro')
})

router.get('errorRegistro',(req,res)=>{
    res.render('errorRegistro')
})

router.get('errorLogin',(req,res)=>{
    res.render('errorLogin')
})

export default router