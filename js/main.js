// Carro
let carroIcono = document.querySelector("#icono-carro");
let carro = document.querySelector(".carro");
let cerrarCarro = document.querySelector("#cerrar-carro");


//Abrir carro
carroIcono.addEventListener("click", () => {
    console.log("Clic en icono");
    carro.classList.add("activo");
});


//Cerrar carro
cerrarCarro.addEventListener("click", () => {
    carro.classList.remove("activo");
});

// Funcionamiento del carro
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready();
}

function ready(){
    //Eliminar items
    const eliminarCarroBtn = document.getElementsByClassName("carro-eliminar");
    console.log(eliminarCarroBtn);
    for (let i = 0; i < eliminarCarroBtn.length; i++){
        let button = eliminarCarroBtn[i];
        button.addEventListener('click', eliminarCarroItem);
    }
    // Cambios en la cantidad
    let cantidadInputs = document.getElementsByClassName("carro-cantidad")
    for (let i = 0; i < cantidadInputs.length; i++){
        let input = cantidadInputs[i];
        input.addEventListener('change', cantidadCambiada);
    }
    // Agregar al carro
    let agregarCarro = document.getElementsByClassName("boton-item");
    for (let i = 0; i < agregarCarro.length; i++){
        let button = agregarCarro[i];
        button.addEventListener('click', agregarCarroClicked)
    }
}

function eliminarCarroItem(event){
    let btnClicked = event.target;
    btnClicked.parentElement.remove();
    actualTotal();
}

function cantidadCambiada(event){
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    actualTotal();
}

//Agregar al carro
function agregarCarroClicked(event){
    let button = event.target;
    let tiendaItems = button.parentElement;
    let titulo = tiendaItems.getElementsByClassName("titulo-item")[0].innerText;
    let precio = tiendaItems.getElementsByClassName("precio")[0].innerText;
    let itemImg = tiendaItems.getElementsByClassName("item-img")[0].src;
    agregarItemACarro(titulo, precio, itemImg);
    actualTotal();
}

function agregarItemACarro(titulo, precio, itemImg){
    let carroTiendaBox = document.createElement("div");
    carroTiendaBox.classList.add('carro-box');
    let carroItems = document.getElementsByClassName('carro-contenido')[0];
    let carroItemsNombres = carroItems.getElementsByClassName('carro-producto-titulo');
    for (let i = 0; i < carroItemsNombres.length; i++){
        alert("Ya agregaste este articulo a tu carro");
        return;
    }
}

let carroBoxContenido =`
                <img src="imgs/agua.png" alt="Producto agregado" class="carro-img">
                <div class="detalle-box">
                    <div class="carro-producto-titulo">Agua Manantial 600ml</div>
                    <div class="carro-precio">$2.900</div>
                    <input type="number" value="1" class="carro-cantidad">
                </div>
                <!-- Eliminar del carro -->
                <i class="fa-solid fa-trash carro-eliminar"></i>`;
carroTiendaBox.innerHTML = carroBoxContenido;
carroItems.append(carroTiendaBox);
carroTiendaBox.getElementsByClassName('carro-eliminar')[0].addEventListener('click', eliminarCarroItem);
carroTiendaBox.getElementsByClassName('carro-cantidad')[0].addEventListener("change", cantidadCambiada);

//Actualizar el total
function actualTotal(){
    let contenidoCarro = document.getElementsByClassName('carro-contenido')[0];
    let carroBoxes = contenidoCarro.getElementsByClassName('carro-box');
    let total = 0;
    for (let i = 0; i < carroBoxes.length; i++){
        let carroBox = carroBoxes[i];
        let precioItem = carroBox.getElementsByClassName('carro-precio')[0];
        let cantidadItem  = carroBox.getElementsByClassName('carro-cantidad')[0];
        let cantidad = cantidadItem.value;
        let precio = parseFloat(precioItem.innerText.replace("$", ""));
        total = total + (precio * cantidad);

        document.getElementsByClassName("total-precio")[0].innerText = '$' + total + "00";
    }
}