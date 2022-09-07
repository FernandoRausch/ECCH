import { Router } from "express";
import passport from "passport";
const router = Router();

router.post('/login', passport.authenticate('login', {
    failureRedirect: '/errorLogin',
    successRedirect: '/home'
}))

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/errorLogin', (req, res) => {
    res.render('errorLogin')
})

router.get('/home', (req, res) => {
    res.render('home')
})

export default router;
