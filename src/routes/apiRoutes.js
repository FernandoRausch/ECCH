import { Router } from "express";
import passport from 'passport';
import { fork } from 'child_process'
import nodemailer from 'nodemailer'
const router = Router()


router.post('/registro', passport.authenticate('registro', {failureRedirect: '/errorRegistro',successRedirect: '/home'}))

router.post('/login', passport.authenticate('login', {
    failureRedirect: '/errorLogin',
    successRedirect: '/home'

}))

router.get('/home', (req, res) => {
    res.render('home')
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

// router.get('/api/randoms', (req, res) => {
//     const quantity = req.query.quantity || 100000000
//     const child = fork("./src/helper.js")
//     child.send(quantity)
//     child.on("message",(msg)=>{
//         res.send(msg)
//     })
//     child.on("exit",(code)=>{
//         console.log("Process finished", code)
//     })
// })

export default router


// async (req,res)=>{
//     try {
//         const { nombre, email, password, direccion, edad, telefono, avatar } = req.body
//         console.log({ nombre, email, password, direccion, edad, telefono, avatar })
//         let htmlTemplate = `
//     <h1>Informacion de usuario</h1>
//     <h2>${nombre}</h2>
//     <h2>${email}</h2>
//     <h2>${password}</h2>
//     <h2>${direccion}</h2>
//     <h2>${edad}</h2>
//     <h2>${telefono}</h2>
//     <h2>${avatar}</h2>
//     `
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.ethereal.email',
//             port: 587,
//             auth: {
//                 user: 'jerrell.bradtke71@ethereal.email',
//                 pass: 'Ng3Dba9gNeNvBWX7ZG'
//             }
//         });

//         const info = await transporter.sendMail({
//             from: 'Sistema',
//             to: "jerrell.bradtke71@ethereal.email",
//             subject: "Nuevo registro",
//             html: htmlTemplate,
//         });
//     } catch (error) {
//         res.status(500)
//     }
// }