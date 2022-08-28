
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    fs.readFile('form.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
})

app.post('/imc', (req, res) => {
    const nome = req.body.nome;
    const peso = req.body.peso;
    const altura = req.body.altura;
    const result = peso / (altura * altura);

    let imc = '';

    if(result < 18.5){
        imc = 'Magreza';
    }else if(result < 25){
        imc = 'Saudável';
    }else if(result < 30){
        imc = 'Sobrepeso';
    }else if(result < 35){
        imc = 'Obesidade grau I';
    }else if(result < 40){
        imc = 'Obesidade grau II';
    }
    res.send(`Olá ${nome} seu IMC é ${result.toFixed(2)} e você esta ${imc}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})