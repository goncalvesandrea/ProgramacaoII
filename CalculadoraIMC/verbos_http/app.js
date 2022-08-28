const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.write('Metodo: GET')
    res.end()
})

app.post('/', (req, res) => {
    res.write('Metodo: POST')
    res.end()
})

app.put('/', (req, res) => {
    res.write('Metodo: PUT')
    res.end()
})

app.delete('/', (req, res) => {
    res.write('Metodo: DELETE')
    res.end()
})

app.patch('/', (req, res) => {
    res.write('Metodo: PATCH')
    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})