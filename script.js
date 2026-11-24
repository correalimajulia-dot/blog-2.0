// Sistema de Filtro por Abas
const tabButtons = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' de todas as abas e adiciona na selecionada
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-tab');

        // Oculta ou exibe os posts com base na aba ativa
        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contador de Curtidas e Reações
const reactionButtons = document.querySelectorAll('.btn-like, .btn-fire');

reactionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const countSpan = button.querySelector('.count');
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
    });
});