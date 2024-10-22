function ajustarLayout() {
    const larguraTela = window.innerWidth;
    console.log(larguraTela)
    const homeSection = document.getElementById('home');
    console.log(homeSection)
    
    if (larguraTela <= 500 && homeSection) {
      homeSection.innerHTML = `
      <div class="conteudo-sobre-itens">
        <div class="conteudo-sobre-itens-infos">
            <img class="conteudo-sobre-itens-infos-titulo" src="./img/sobre.svg" alt="Titulo da sessão sobre">
            <div class="conteudo-sobre-itens-infos-separacao"></div>
            <h3 class="conteudo-sobre-itens-infos-descricao">
                Olá! Meu nome é <span class="nome">Beatryz Coalho</span>, eu sou desenvolvedora Full Stack na <span class="nomeEmpresa">Brave Asset</span>, onde participo da criação de um novo sistema para o mercado financeiro chamado <span class="nomeSistema">Floki</span>. Eu aprendi a programar com o desenvolvimento desse software e em cursos online, o que me ajudou a melhorar meu conhecimento e habilidades, certificando-me que aprendi o suficiente para experimentar novas tecnologias. Aqui estão algumas tecnologias que conheço:
            </h3>
            <div class="conteudo-sobre-itens-infos-linguagens">
                  <div class="conteudo-sobre-itens-infos-linguagens-agrupadas">
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">HTML</h3>
                      </div>
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">CSS</h3>
                      </div>
                      
                  </div>
                  <div class="conteudo-sobre-itens-infos-linguagens-agrupadas">
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">JavaScript</h3>
                      </div>
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">React Native</h3>
                      </div>
                  </div>
                  <div class="conteudo-sobre-itens-infos-linguagens-agrupadas">
                      
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">TypeScript</h3>
                      </div>
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">Node.js</h3>
                      </div>
                  </div>
                  <div class="conteudo-sobre-itens-infos-linguagens-agrupadas">
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">Python</h3>
                      </div>
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">Django</h3>
                      </div>    
                  </div>
                  <div class="conteudo-sobre-itens-infos-linguagens-agrupadas">
                      <div class="icone-linguagem"></div>
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">SQL</h3>
                      </div>
                      <div class="icone-linguagem">
                          <img class="conteudo-sobre-itens-infos-seta" src="./img/icone-linguagens.svg" alt="Icone de seta">
                          <h3 class="conteudo-sobre-itens-infos-text">GitHub</h3>
                      </div>
                  </div>
              </div>
              <div class="conteudo-sobre-itens-imagem">
                  <img class="principal-segundo" src="./img/ApresentacaoFloki.svg" alt="Foto apresentando o floki">
                  <img class="contorno-segundo" src="./img/ContornoApresentacao.svg" alt="Contorno da foto principal da sessão">
              </div>
      `;
    }
  }

  // Chamar a função ao carregar a página e ao redimensionar a tela
  window.addEventListener('load', ajustarLayout);
  window.addEventListener('resize', ajustarLayout);