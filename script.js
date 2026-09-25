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

// Mensagem pré-formatada para o WhatsApp
const mensagemWhatsapp = encodeURIComponent("Oi! Eu li a sua carta e aceito tentar de novo... ♡");
const linkWhatsapp = `https://wa.me/5512996409552?text=${mensagemWhatsapp}`;

if (botaoSim && resposta) {
    botaoSim.addEventListener("click", function () {
        resposta.innerHTML = `
            <p><strong>Então essa história continua...</strong> ♡</p>
            <p style="font-size: 16px; margin-top: 10px; color: #d8c8ce;">
                Obrigado por me dar essa chance! Clique no botão abaixo para me mandar uma mensagem:
            </p>
            <a href="${linkWhatsapp}" target="_blank" class="btn btn-whatsapp">
                Falar no WhatsApp
            </a>
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
