const carro = document.querySelector('.carro');
const obstaculo = document.querySelector('.obstaculo')

function pular(){
    carro.classList.add('pular');
    setTimeout(function (){
        carro.classList.remove('pular');
    } , 500);
}

const loop = setInterval(function (){
    const obstaculopos = obstaculo.offsetLeft;
    const carropos = +window.getComputedStyle(carro).bottom.replace('px', '');
    if(obstaculopos <= 185 && carropos <= 50){
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculopos}px`
        alert("Você Perdeu (Recarregue a página e pressione 'OK' para jogar novamente)");
    }
}, 10)

document.addEventListener('keydown', pular)