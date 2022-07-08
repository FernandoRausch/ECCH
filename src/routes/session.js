import { Router } from "express";

const router = Router()

router.get('/session',(req,res)=>{
    res.render('session',{usuario:req.session.usuario})
})

router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        res.render('sessionLogin')
    })
})

router.post('/login',(req,res)=>{
    for(const key in req.body){
        req.session[key]=req.body[key]
    }
    res.redirect('/session')
})

router.get('/',(req,res)=>{
    res.render('session',{usuario:req.session.usuario})
})

export default router