
const lampada = document.getElementById('lampada');


lampada.addEventListener('click', () => {

    if (lampada.src.includes('lampada-off.jpg')) {
        lampada.src = 'lampada-on.jpg';
        lampada.alt = 'Lâmpada acesa';
    } else {
        lampada.src = 'lampada-off.jpg';
        lampada.alt = 'Lâmpada apagada';
    }
});