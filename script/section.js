// Função que será executada quando a seção entrar na área visível

const sectionHome = document.querySelector("#home")


function observarElementos(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona as classes que ativam as animações
            const contorno = document.querySelector('.conteudo-home-itens-imagem img.contorno');
            const principal = document.querySelector('.conteudo-home-itens-imagem img.principal');
            
            contorno.style.animationPlayState = 'running'; // Inicia a animação do contorno
            principal.style.animationPlayState = 'running'; // Inicia a animação da imagem principal
        }
    });
}

// Seleciona a seção que contém os itens que você quer animar
const secaoHome = document.querySelector('.conteudo-home');

// Cria o observador
const observador = new IntersectionObserver(observarElementos, {
    threshold: 0.1 // Define que o callback será acionado quando 10% da seção estiver visível
});

observador.observe(secaoHome);



