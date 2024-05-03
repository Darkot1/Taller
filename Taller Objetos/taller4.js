
//PUNTO 1

const persona = {
    nombre: "Juan",
    edad: 24,
    ciudad: "Cali",
};
console.log(persona);

//PUNTO 2
persona["ocupacion"] = "Programador";
console.log(persona);

//Punto 3
console.log(persona.nombre);

//Punto 4
const libro ={
    tituto: "Habitos atomicos",
    auto:"James Clear",
    año:2018,
};
console.log(libro);

//Punto 5

const informacion = {...persona, ...libro};
console.log(informacion);

//Punto 6
persona.nombre="Pedro"
console.log(persona)

//Punto 7
delete libro.año;
console.log(libro)

//Punto 8
const coche = {
    modelo:"BRZ",
    marca:"Subaru",
    año:"2018"
};

//Punto 9
console.log(coche);

//Punto 10
console.log(`El coche es de marca ${coche.marca} modelo ${coche.modelo} y es del año ${coche.año}`)

//Punto 11

const circulo = {
    radio: 4,
    color: "Azul"
};

//Punto 12

const pi = 3.1416;
let areaCirculo = pi * Math.pow(circulo.radio,2);
console.log(areaCirculo);

//Punto 13

const rectangulo = {
    ancho: 10,
    largo: 5,
}


//Punto 14

let areaRectangulo = 2 * (rectangulo.ancho + rectangulo.largo);
console.log(areaRectangulo);

//Punto 15
const formas = {...circulo,...rectangulo};
console.log(formas);




