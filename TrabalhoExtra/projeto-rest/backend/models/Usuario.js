const { response } = require('express');
const Mesas = require('./Mesas')

let usuarios = []
let id = 0;

function listagemUsuario(response) {
    return response.json(usuarios);
}

function verUsuario(id, response) {
    let pos = pegarUsuarioByID(id);
    if (pos != undefined) return response.json(usuarios[pos]);
}

function adicionarUsuario(nome, mesas, cadeiras, response) {

    let data = (new Date);

    if (!Mesas.alocarMesa(mesas, cadeiras)) {
        response.json({ status: 'Falta cadeira/mesa bixo  :/' })
        return;
    }

    usuarios.push({
        id: id,
        nome: nome,
        mesas: mesas,
        cadeiras: cadeiras,
        horario: data.getHours() + ":" + data.getMinutes()
    })
    id++;

    response.json({ status: 'Mesa/Cadeiras, alocadas com sucesso meu nobre!'})
}

function removerUsuario(id, response) {
    let pos = pegarUsuarioByID(id);
    if (pos != undefined) {
        Mesas.desalocarMesa(usuarios[pos].mesas, usuarios[pos].cadeiras)
        usuarios.splice(pos);

        response.json({ status: 'Usúário expulso com sucesso!'})
    } else {
        response.json({ status: 'Usuário não encontrado.' })
    }
}

function atualizarUsuario(id, dados, response) {
    let data = (new Date);

    let pos = pegarUsuarioByID(id);
    if (pos != undefined) {
        //ESTORNANDO MESAS
        Mesas.desalocarMesa(usuarios[pos].mesas, usuarios[pos].cadeiras)

        usuarios[pos] = Object.assign(dados, { id: id, horario: data.getHours() + ":" + data.getMinutes() });

        //ALOCANDO MESAS
        Mesas.alocarMesa(dados.mesas, dados.cadeiras)

        response.json({ status: 'Usuário atualizado com sucesso.' })
    } else {
        response.json({ status: 'Usuário não encontrado.' })
    }
}


//FUNÇÃO AUXILIAR
function pegarUsuarioByID(id) {
    let pos
    usuarios.forEach((elemento, index, arr) => {
        if (elemento.id == id) pos = index
    })
    return pos
}

module.exports = { usuarios, adicionarUsuario, removerUsuario, atualizarUsuario, listagemUsuario, verUsuario };