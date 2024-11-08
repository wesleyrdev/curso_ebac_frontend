// Exemplo de funcionalidade simples para o botão "Adicionar ao Carrinho"
document.querySelectorAll('.produto button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
