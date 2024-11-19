let indiceAtual = 0;
const imagens = document.querySelectorAll('.imagem');

// Função para mostrar a imagem atual
function mostrarImagem(indice) {
    const totalImagens = imagens.length;
    indiceAtual = (indice + totalImagens) % totalImagens;
    const deslocamento = -indiceAtual * 100;
    document.querySelector('.imagens').style.transform = `translateX(${deslocamento}%)`;
}

// Função para ir à próxima imagem
function proximaImagem() {
    mostrarImagem(indiceAtual + 1);
}

// Função para ir à imagem anterior
function anteriorImagem() {
    mostrarImagem(indiceAtual - 1);
}

// Carrossel automático (troca a imagem a cada 3 segundos)
setInterval(proximaImagem, 3000);