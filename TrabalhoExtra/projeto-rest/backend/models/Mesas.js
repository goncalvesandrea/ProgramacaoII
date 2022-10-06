let mesas = 30
let cadeiras = 120

function alocarMesa(mesas_p, cadeiras_p) {

    if(mesas < mesas_p || cadeiras < cadeiras_p) {
        return false;
    }

    //SUBTRAINDO CADEIRAS
    mesas -= mesas_p;
    cadeiras -= cadeiras_p;

    return true;
}

function desalocarMesa(mesas_p, cadeiras_p) {
    mesas += mesas_p;
    cadeiras += cadeiras_p;
}

function statusMesas() {
    console.log("TOTAL DE MESAS DISPONIVEIS:")
    console.log("MESAS ", mesas)
    console.log("CADEIRAS ", cadeiras)
}

function status() {
    return {
        mesas: mesas,
        cadeiras: cadeiras
    }
}

module.exports = {mesas, alocarMesa, desalocarMesa, statusMesas, status}