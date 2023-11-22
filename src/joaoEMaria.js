let joao = 1;
let maria = 2;

function getMaria() {
    return maria;
}

function getJoao() {
    return joao;
}

function setMaria(x) {
    if(x >= 0) {
        maria = x;
    } else {
        maria = 0;
    }
}

function setJoao(x) {
    if(x >= 0) {
        joao = x;
    } else {
        joao = 0;
    }
}

function deJoaoParaMaria() {
    maria += joao;
    joao = 0;
}

function deMariaParaJoao() {
    joao += maria;
    maria = 0;
}

export {getJoao, getMaria, setMaria, setJoao, deJoaoParaMaria, deMariaParaJoao};