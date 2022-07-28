import { Router } from "express";
import passport from 'passport';
import {fork} from 'child_process'
const router = Router()


router.post('/registro', passport.authenticate('registro', {
    failureRedirect: '/errorRegistro',
    successRedirect: '/datos'
}))

router.post('/login', passport.authenticate('login', {
    failureRedirect: '/errorLogin',
    successRedirect: '/datos'

}))

router.get('/datos', (req, res) => {
    res.render('info')
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

router.get('/errorRegistro', (req, res) => {
    res.render('errorRegistro')
})

router.get('/errorLogin', (req, res) => {
    res.render('errorLogin')
})

router.get('/info', (req, res) => {
    res.render('datos')
})

router.get('/api/randoms', (req, res) => {
    const quantity = req.query.quantity || 100000000
    const child = fork("./src/helper.js")
    child.send(quantity)
    child.on("message",(msg)=>{
        res.send(msg)
    })
    child.on("exit",(code)=>{
        console.log("Process finished", code)
    })
})

export default router
