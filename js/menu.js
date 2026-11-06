
const enlacesMenu = document.querySelectorAll(".enlace-menu");

const paginaActual = window.location.pathname.split("/").pop();

enlacesMenu.forEach(enlace => {

    const destino = enlace.getAttribute("href");

    if (destino === paginaActual ||
        (paginaActual === "" && destino === "index.html")) {

        enlace.classList.add("activo");

    } else {

        enlace.classList.remove("activo");

    }

});
