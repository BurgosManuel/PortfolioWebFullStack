
/*
==========
- Definimos las variables
==========
*/
const sidebar = document.querySelector('.sidebar');
const button = document.querySelector('.toggler-btn');
const closeButton = document.querySelector('.close-btn');
const openButton = document.querySelector('.open-btn');
const minWidth = window.matchMedia('(min-width: 1200px)');
let isOpen;


/*
==========
- Función para cambiar el estado de la barra de navegación. 
- Aprovechamos la clase "d-none" de Bootstrap para ocultar o mostrar los iconos.
==========
*/

function openSideBar() {
    sidebar.classList.remove('hidebar');
    openButton.classList.add('d-none');
    closeButton.classList.remove('d-none');
    return isOpen = true;
}

function closeSideBar() {
    sidebar.classList.add('hidebar');
    openButton.classList.remove('d-none');
    closeButton.classList.add('d-none');
    return isOpen = false;
}

function toggleSideBar(){
    if (!isOpen) {
        openSideBar();
    } else {
        closeSideBar()
    }
}

function loadSideBar() {
    if (minWidth.matches) {
        openSideBar();
    } else {
        closeSideBar();
    }
}

// function resizeSideBar() {
//         if (minWidth.matches) {
//             openSideBar();
//     }
// } Falta finalizar.



/*
==========
- Disparadores de las funciones.
==========
*/
button.addEventListener('click', toggleSideBar);
window.addEventListener('load', loadSideBar);
window.addEventListener('resize', loadSideBar);