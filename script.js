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
        resposta.innerHTML = `
            <p><strong>Então essa história continua...</strong> ♡</p>
            <p style="font-size: 16px; margin-top: 10px; color: #d8c8ce;">
                Obrigado por me dar essa chance. Me manda uma mensagem quando puder pra gente conversar.
            </p>
        `;
    });
}

if (botaoNao && resposta) {
    botaoNao.addEventListener("click", function () {
        resposta.innerHTML = `
            <p><strong>Tudo bem...</strong></p>
            <p style="font-size: 16px; margin-top: 10px; color: #d8c8ce;">
                Obrigado por ter lido até aqui e por ter feito parte da minha vida. Eu realmente desejo o melhor pra você.
            </p>
        `;
    });
}
