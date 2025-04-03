let rodada = 1;
let jogoAtivo = false;

// Imagens de fundo 
const imgVitoriaParcial = "img/vidrobom.png"; // Quando o jogador acerta um vidro
const imgVitoriaFinal = "img/vitoria.png"; // Quando o jogador vence o jogo completo
const imgDerrota = "img/vidroquebrado.png"; // Quando o jogador perde
const imgPadrao = "img/pontedecristal.png"; // Imagem inicial

// Iniciar jogo
function iniciarJogo() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    document.getElementById("btn-reiniciar").classList.remove("hidden");

    document.body.style.backgroundImage = `url('${imgPadrao}')`; // Define o fundo padrão ao iniciar
    jogoAtivo = true;
    rodada = 1;
    atualizarInterface();
}

// Escolher vidro
function escolherVidro(escolhaJogador) {
    if (!jogoAtivo) return;

    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador === pisoQuebrado) {
        document.getElementById("resultado").textContent = "💥 Vidro quebrou! Game Over!";
        document.body.style.backgroundImage = `url('${imgDerrota}')`; // Troca o fundo para a imagem de derrota
        jogoAtivo = false;
    } else {
        document.getElementById("resultado").textContent = `✅ Passou! O vidro quebrado era o ${pisoQuebrado}`;
        document.body.style.backgroundImage = `url('${imgVitoriaParcial}')`; // Troca o fundo para a imagem de acerto
        rodada++;

        if (rodada <= 5) {
            atualizarInterface();
        } else {
            document.getElementById("resultado").textContent = "🎉 Parabéns! Você venceu o jogo!";
            document.body.style.backgroundImage = `url('${imgVitoriaFinal}')`; // Mostra a imagem final de vitória
            jogoAtivo = false;
        }
    }
}

// Atualiza nível na interface
function atualizarInterface() {
    document.getElementById("nivel").textContent = `Nível ${rodada}`;
}

// Reiniciar jogo
function reiniciarJogo() {
    iniciarJogo();
    document.getElementById("resultado").textContent = "";
}
