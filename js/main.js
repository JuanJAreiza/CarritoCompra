// Carro
let carroIcono = document.querySelector('#icono-carro')
let carro = document.querySelector('.carro')
let cerrarCarro = document.querySelector('#cerrar-carro')

carroIcono.onclick = () => {
    carro.classList.add("active");
};

cerrarCarro.onclick = () => {
    carro.classList.remove("active");
};