let valor = 0;

const contador = document.getElementById('contador');
const btnSomar = document.getElementById('mais');
const btnSubtrair = document.getElementById('menos');

function atualizarContador(){
    contador.textContent = valor;
}

function contadorMais(){
    valor++;
    atualizarContador();
}

function contadorMenos(){
    valor--;
    atualizarContador();
}