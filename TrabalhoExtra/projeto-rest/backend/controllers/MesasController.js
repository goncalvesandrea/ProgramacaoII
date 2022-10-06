var express = require('express');
var router = express.Router();

const Usuario = require('../models/Usuario')
const Mesas = require('../models/Mesas');

router.get('/', function (req, res) {
    res.json(Mesas.status())
});


module.exports = router;