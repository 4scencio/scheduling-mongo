const express = require('express')
const app = express()
const router = require ('./routes')
const mongoose = require('mongoose')

app.use(express.static('public'))
app.use(express.json())

app.use(router)

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/agendamento', { useNewUrlParser: true, useUnifiedTopology: true})

app.listen(8080, () => {
    console.log('Servidor rodando')
})