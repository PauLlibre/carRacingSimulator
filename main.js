class Coche {
  constructor(id, name, gasolina, color, posicion) {
    this.name = name;
    this.velocidad = Math.random() * 2;
    this.gasolina = gasolina;

    this.color = color;
    this.id = id;
    this.posicion = posicion;
  }

  createUiCar() {
    const createCar = document.createElement("div");
    document.getElementById("circuito").appendChild(createCar);
    createCar.className = "coche";
    createCar.id = this.id;
    createCar.style.top = Number(this.posicion) * 50 + "px";
    createCar.innerHTML = `<img src="img/${this.name}.png" alt='${this.name}'>`;
  }

  nuevaVelocidad() {
    this.velocidad = Math.round(Math.random() * 8 + 1);
  }
}

let coche1 = new Coche("coche1", "Lambo", 100, "blue", "0");
let coche2 = new Coche("coche2", "Ferrari", 20, "pink", "1");
let coche3 = new Coche("coche3", "Ambulance", 299, "black", "2");

let coches = [coche1, coche2, coche3];

coche1.createUiCar();
coche2.createUiCar();
coche3.createUiCar();

let ganadores = [];
function myMove() {
  ganadores = [];
  document.getElementById("winner").innerHTML = ``;

  for (i = 0; i < coches.length; i++) {
    coches[i].nuevaVelocidad();
    let id = null;
    const elem = document.getElementById(coches[i].id);
    let velocidad = coches[i].velocidad;
    let nombre = coches[i].name;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos >= 750) {
        clearInterval(id);
        ganadores.push(nombre);
        document.getElementById("winner").innerHTML = `${ganadores[0]} WINS!`;
      } else {
        pos += velocidad;
        elem.style.left = pos + "px";
      }
    }
  }
}
