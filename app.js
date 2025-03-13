//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome correspondente

    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`; // Exibe o resultado
}
