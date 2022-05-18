const tamanio = document.getElementsByClassName("tamaño");
const padre = document.getElementById("padre");
const button = document.getElementById("jugar");
const div = document.getElementById("div");

button.addEventListener("click", (evento) => {
    div.style.display = "none";
    switch(padre.value){
        case '8*8':
            break;
        case '16*16':
            break;
        case '24*24':
            break;
        default:
            break;
    }
});

