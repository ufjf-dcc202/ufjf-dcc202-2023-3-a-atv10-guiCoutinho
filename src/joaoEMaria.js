let joao = 1;
let maria = 2;

function getMaria() {
    return maria;
}

function getJoao() {
    return joao;
}

function setMaria(x) {
    maria = x;
}

function setJoao(x) {
    joao = x;
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