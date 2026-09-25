// ================================
// BOTÃO "ABRIR"
// ================================

const botaoAbrir = document.querySelector(".btn");

if (botaoAbrir) {
    botaoAbrir.addEventListener("click", function () {
        const motivo = document.querySelector("#motivo");

        if (motivo) {
            motivo.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


// ================================
// ANIMAÇÃO DAS SEÇÕES
// ================================

const secoes = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
            }
        });
    },
    {
        threshold: 0.15
    }
);

secoes.forEach((secao) => {
    observer.observe(secao);
});


// ================================
// INTERAÇÃO FINAL
// ================================

const botaoSim = document.querySelector("#sim");
const botaoNao = document.querySelector("#nao");
const resposta = document.querySelector("#resposta");

if (botaoSim && resposta) {
    botaoSim.addEventListener("click", function () {
        resposta.textContent =
            "Então talvez a nossa história ainda não tenha terminado.";
    });
}

if (botaoNao && resposta) {
    botaoNao.addEventListener("click", function () {
        resposta.textContent =
            "Tudo bem. Obrigado por ter lido até aqui.";
    });
}