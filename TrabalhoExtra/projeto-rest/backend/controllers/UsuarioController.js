var express = require('express');
var router = express.Router();

const Usuario = require('../models/Usuario')
const Mesas = require('../models/Mesas')

router.get('/', function (req, res) {
    Usuario.listagemUsuario(res)
});

router.post('/', function (req, res) {
    let nome = req.body.nome
    let mesas = req.body.mesas
    let cadeiras = req.body.cadeiras

    Usuario.adicionarUsuario(nome, mesas, cadeiras, res)
});

router.put('/', function (req, res) {
    let id = req.body.id
    let nome = req.body.nome
    let mesas = req.body.mesas
    let cadeiras = req.body.cadeiras

    Usuario.atualizarUsuario(id, { nome: nome, mesas: mesas, cadeiras: cadeiras}, res)
});

router.delete('/', function (req, res) {
    let id = req.body.id

    Usuario.removerUsuario(id, res)
});

module.exports = router;