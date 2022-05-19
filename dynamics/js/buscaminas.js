
const button = document.getElementById("juego-nuevo");
const tablero = document.getElementById("tablero");
const select = document.getElementById("padre");

switch (select.value) {
    case '8*8':
        let filas = 8;
        let columnas = 8;
    break;
    case '16*16':
        let filas = 16;
        let columnas = 16;
    break;
    case '24*24':
        let filas = 24;
        let columnas = 24;
    break;
}

let minas = filas * columnas * 0.1;
let tablero = [];

button.addEventListener("click", gen_ta);

button.addEventListener("click", gen_ta);
button.addEventListener("click", va_ta);
button.addEventListener("click", po_Mi);
button.addEventListener("click", con_Mi);

function gen_ta(){
    div.style.display = "none";
    for(let f = 0; f<filas; f++){
        tablero.innerHTML += "<tr>";
        for(let c=0; c<filas; c++){
            tablero.innerHTML += "<td class='celdas'></td>";
        }
    }
}

function nu_jue{
    gen_ta();
    
}

function va_ta(){
    tablero = [];
    for (let c = 0; c < columnas; c++) {
        tablero.push([]);
        
    }
}

function po_Mi(){
    for(let m = 0; m < minas; m++){
        do{
            r1 = Math.floor(Math.random() * columnas);
            r2 = Math.floor(Math.random() * filas);
        }while(tablero[r1][r2] != -1);
        tablero[r1][r2] = -1;
    }
}

function con_Mi(){
    for(let f = 0; f<filas; f++){
        for(let c=0; c<filas; c++){
            if (!tablero[c][f]) {
                tablero[c][f] = 0;
            }
        }
    }
}
