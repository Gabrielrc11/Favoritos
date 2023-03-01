const carro = document.querySelector('.carro');
const obstaculo = document.querySelector('.obstaculo')

function pular(){
    carro.classList.add('pular');
    setTimeout(function (){
        carro.classList.remove('pular');
    } , 500);
}

var botao = document.querySelector("#recarregar");
botao.addEventListener("click", function() {
    location.reload();
});

const loop = setInterval(function (){
    const obstaculopos = obstaculo.offsetLeft;
    const carropos = +window.getComputedStyle(carro).bottom.replace('px', '');
    if(obstaculopos <= 185 && carropos <= 50){
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculopos}px`
    }
}, 10)

document.addEventListener('keydown', pular)