const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.json({resposta: 'Rota OK'})
})

router.get('/cadastro', (req, res) =>{
    res.render('create')
})


module.exports = router;