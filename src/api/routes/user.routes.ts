import express from 'express';
const router = express.Router();
// import { createUserController } from '../controllers/user.controller';


router.get('/', (req, res) => {
    res.send('User routes!');
});


router.get('/user',(req, res) => {
    res.send({
        tshirt: "👋🏽"
    })
})
// router.post('/', createUserController);


export default router;
