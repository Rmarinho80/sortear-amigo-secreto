//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let amigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nomeAmigo = amigo.value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        amigo.value = "";
        resultado.innerHTML = "";
    } else {
        alert('Por favor, insira um nome válido');
    }
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let indiceSorteado = sortearNumero(0, amigos.length - 1);
        let amigoSorteado = amigos[indiceSorteado];
        listaAmigos.innerHTML = '';
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    } else {
        alert('Por favor, adicione pelo menos dois amigos');
    }
}

// Função que atualiza a lista de amigos na tela
function atualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    for (let amigoNome of amigos) {
        let amigoLi = document.createElement('li');
        amigoLi.textContent = amigoNome;
        listaAmigos.append(amigoLi);
    }
}

// Função que sorteia um número entre o min e o max com eles incluso
function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}