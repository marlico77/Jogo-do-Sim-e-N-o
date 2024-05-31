document.addEventListener('DOMContentLoaded', function() {
    const naoButton = document.getElementById('nao');
    const simButton = document.getElementById('sim');
    const mensagem = document.getElementById('mensagem');

    function moveButton() {
        const x = Math.random() * (window.innerWidth - naoButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - naoButton.offsetHeight);
        naoButton.style.position = 'absolute';
        naoButton.style.left = `${x}px`;
        naoButton.style.top = `${y}px`;
    }

    naoButton.addEventListener('mouseover', moveButton);
    naoButton.addEventListener('touchstart', moveButton);

    simButton.addEventListener('click', function() {
        mensagem.textContent = 'Manda uma foto';
    });
});
