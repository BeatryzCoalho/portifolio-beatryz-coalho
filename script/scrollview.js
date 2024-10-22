const dots = document.querySelectorAll('.dot');
const sections = {
    'home': document.querySelector('#home'),
    'sobre': document.querySelector('#sobre'),
    'skills': document.querySelector('#skills'),
    'projetos': document.querySelector('#projetos'),
    'contato': document.querySelector('#contato')
};

// Adiciona um evento de clique em cada bolinha
dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        const section = sections[this.dataset.section]; // Obtém a seção correspondente
        console.log(section)
        section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
        
    });
});

// Atualiza a bolinha ativa com base na seção visível
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            dots.forEach(dot => dot.classList.remove('active'));
            const activeDot = document.querySelector(`.dot[data-section=${entry.target.id}]`);
            console.log(activeDot)
            if (activeDot) {
                activeDot.classList.add('active');
            }
        }
    });
}, { threshold: 0.25 });

// Observa cada seção
Object.values(sections).forEach(section => observer.observe(section));