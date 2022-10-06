const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 3000
let cors = require('cors')

//CONTROLLERS
const UsuarioController = require('./controllers/UsuarioController')
const MesasController = require('./controllers/MesasController')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/usuario', UsuarioController);
app.use('/mesas', MesasController);

app.listen(port, () => {
    console.log(`App ouvindo na porta: ${port}`)
})
