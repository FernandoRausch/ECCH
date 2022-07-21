import { Router } from "express";
import passport from 'passport';
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

export default router
