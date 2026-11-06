const botonTema = document.getElementById("btnTema");

let modoOscuro = localStorage.getItem("tema") == "oscuro";

aplicarTema();

function aplicarTema(){

    if (modoOscuro) {

        document.body.classList.add("modo-oscuro");
        botonTema.textContent = "Modo claro";
    
    } else {
         
        document.body.classList.remove("modo-oscuro");
        botonTema.textContent = "Modo oscuro";
    }
}

// Cambiar de tema al pulsar el botón
botonTema.addEventListener("click", function(){

    modoOscuro = !modoOscuro;

    if (modoOscuro){
        localStorage.setItem("tema", "oscuro");

    } else {
        localStorage.setItem("tema", "claro");
    }

    aplicarTema();
});
