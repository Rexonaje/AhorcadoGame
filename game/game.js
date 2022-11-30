//tomar palabra aleatorio
let arrayPalabras = JSON.parse(sessionStorage.getItem("palabras"));

function randomTake() {
  //selecciona numero aleatorio y lo redondea hacia abajo(.floor) dicho numero se corresponde a una posicion del array de palabras
  max = arrayPalabras.length;
  numberSelect = Math.random() * max;
  number = Math.floor(numberSelect);

  palabraAleatoria = arrayPalabras[number];
  return palabraAleatoria;
}

let palabra = randomTake();
palabra = palabra.replace(/\s/g, "");

//letras
let palabraHtml = document.querySelector(".palabra");
let numb = 0;

for (i = 0; i < palabra.length; i++) {
  let letra = palabra[i];
  palabraHtml.innerHTML +=
    "<p class='letraGenerada' " +
    "id='" +
    numb +
    "'>" +
    letra +
    "<canvas id='letterCanvas" +
    numb +
    "' width='50' height='50'></canvas>" +
    "</p>";
  numb = numb + 1;
}

numb = 0;
for (i = 0; i < palabra.length; i++) {
  let id = "letterCanvas" + numb; //numb identifica el div para crear la linea azul debajo de cada letra
  let letter = document.getElementById(id);
  let lettercanv = letter.getContext("2d");
  lettercanv.beginPath();
  lettercanv.fillStyle = "#0A3871";
  lettercanv.fillRect(0, 0, 50, 10);
  lettercanv.stroke;
  numb = numb + 1;
}

//almacenar funciones de draw en una funcion con un parametro que seleccione cada una
function draw(Number) {
  if (Number == 1) drawBase();
  if (Number == 2) drawCuerpo();
  if (Number == 3) drawTecho();
  if (Number == 4) drawSoga();
  if (Number == 5) cabeza();
  if (Number == 6) drawBody();
  if (Number == 7) DrawLeftArm();
  if (Number == 8) DrawRightArm();
  if (Number == 9) drawLeftLeg();
  if (Number == 10) drawRightLeg();
}

//check the letter

numb = 0;
LostCouner = 0;
WinCouner = 0;
let lettersPressed = [];

document.onkeydown = function ok(e) {
  key = e.key.toUpperCase();
  //?(es un if)==if(key.length == 1){ascii = key.charCodeAt(0);}else {ascii = 0;}
  ascii = key.length == 1 ? key.charCodeAt(0) : 0;
  //comprueba si fue presionada la tecla,en cuyo caso corta la funcion
  let IsThere = lettersPressed.includes(key);
  if (IsThere == true) {
    console.log("was pressed");
    return;
  } else {
    lettersPressed.push(key);
  }

  if ((ascii > "64" && ascii < "91") || ascii == "0209") {
    //detecta si es letra, el 0209 es Ñ mayus

    let incluye = palabra.includes(key);

    if (incluye == true) {
      for (i = 0; i < palabra.length; i++) {
        if (key == palabra[i]) {
          //comparará
          letraChange = document.getElementById(numb).style.visibility =
            "visible";
          WinCouner = WinCouner + 1;
          console.log(WinCouner);
        }
        numb = numb + 1;
      }
    }
    if (incluye == false) {
      if (WinCouner < palabra.length && LostCouner < 11) {
        //si el wincounter es mayor que la palabra 0 lostcouner es menor a 11, dejara de detectar letras erroneas
        //lista de letras erroneas
        letrasNo = document.querySelector(".letrasNo");
        letras = letrasNo.textContent;
        letras.toString();

        letrasNo.innerHTML += key;
        LostCouner = LostCouner + 1;
        console.log("error N" + LostCouner);

        draw(LostCouner);

        if (LostCouner >= 10) {
          //al llegar a 11 se muestra el cartel de perdida
		  WinCouner=0;
          let imagenAhorcado = (document.querySelector(
            ".lost"
          ).style.visibility = "visible");
          return;
        }
      }
    }
    if (WinCouner == palabra.length) {
      //ver si la palabra esta completa cada vez que se inserta una key
      let imagenAhorcado = (document.querySelector(".win").style.visibility =
        "visible");
    }
    numb = 0; //reiniica el contador para re-utilizarlo
  }
};

//reiniciar juego
function reloadGame() {
  document.location.reload();
}
