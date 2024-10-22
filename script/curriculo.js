const curriculo = document.querySelector('.conteudo-home-button-curriculo')
const contato = document.querySelector('.conteudo-home-button-contato')
console.log(curriculo)

function curriculoOn(ativa){
    ativa.addEventListener('click', function(e){
        e.preventDefault();
        const link = document.createElement('a');
        link.href = './documentos/Currículo Beatryz Coalho.pdf'; // Defina o caminho correto para o seu arquivo PDF
        link.download = 'Currículo Beatryz Coalho.pdf'; // Nome do arquivo que será baixado
        document.body.appendChild(link); // Adicione o link ao DOM
        link.click(); // Acione o clique no link
        document.body.removeChild(link);  // Remova o link após o download
    })
}

function contatoOn(ativa){
    ativa.addEventListener('click', function(e){
        e.preventDefault();
       
    })
}

curriculoOn(curriculo)