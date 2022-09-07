import { Router } from "express";
const router = Router();

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
})

export default router;
