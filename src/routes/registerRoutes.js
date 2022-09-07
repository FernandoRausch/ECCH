import { Router } from "express";
import passport from "passport";
import "../config/passport-config.js";
const router = Router();

router.get("/", (req, res) => {
  res.status(500).json({ message: "error en registro" });
});

router.post('/registro', passport.authenticate('registro', {failureRedirect: '/errorRegistro',successRedirect: '/home'}))

router.get('/registro', (req, res) => {
    res.render('registro')
})

router.get('/errorRegistro', (req, res) => {
    res.render('errorRegistro')
})
export default router;