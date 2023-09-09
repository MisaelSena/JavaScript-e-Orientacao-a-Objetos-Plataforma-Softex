const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('Rota Raiz.');
});

router.get('/sobre',(req, res)=>{
    res.send('Rota Sobre.');
});

module.exports = router;

    