// Carro
let carroIcono = document.querySelector("#icono-carro");
let carro = document.querySelector(".carro");
let cerrarCarro = document.querySelector("#cerrar-carro");


//Abrir carro
carroIcono.onclick = () => {
    console.log("Clic en icono");
    carro.classList.add("activo");
};


//Cerrar carro
cerrarCarro.onclick = () => {
    carro.classList.remove("activo");
};
