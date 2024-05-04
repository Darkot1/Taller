
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

//PUNTO 16
const computador = {
    marca:"Asus",
    modelo:"2023",
    precio: 2500000
};

//PUNTO 17
console.log(`el precio de la computadora es ${computador.precio}`);

//PUNTO 18
computador["tarjetaGrafica"]="No";

//PUNTO 19
const mascota = {
    nombre:"safiro",
    especie:"gato",
    edad:5
};

//PUNTO 20
console.log(mascota.especie.toUpperCase());

//PUNTO 21 y 22
const fruta ={
    nombre:"Manzana",
    color:"Roja",
    estado:"madura",
    verificarMadurez: function() {
        if(this.estado === "madura"){
            console.log(`la ${this.nombre} esta madura`)
        }else console.log(`la ${this.nombre} no esta madura`)
    }
};

fruta.verificarMadurez();

//PUNTO 23, 24 y 25
const estudiante = {
    nombre:"Pedro",
    edad: 17,
    calificaciones:[3.4, 3.2, 4.1, 2.5, 3.5],
    promedio: function(){
        let total=0;
        for (const nota of this.calificaciones) {
            total+= nota;
        }
        const promedio = total /this.calificaciones.length;
        console.log(`El promedio del estudiante ${this.nombre} es: ${promedio}`);
        console.log(promedio >= 3.0 ? `El estudiante aprobo` : `El estudiante reprobo`)
    },
};

estudiante.promedio();  

//PUNTO 26, 27 y 28
const bolsa = {
    tamaño: 10,
    color: "negra",
    mostrarTamaño: function() {
        console.log(`La bolsa es de tamaño ${this.tamaño}.`);
},
cambiarColor: function(nuevoColor) {
    this.color = nuevoColor;
    console.log(`La bolsa cambio de color a ${this.color}.`);
}
};

bolsa.mostrarTamaño();
bolsa.cambiarColor("verde");

//Punto 29, 30 y 31
const telefono = {
    marca:"samsung",
    modelo:"S24",
    sistemaOperativo: "Android",
    RAM: 8,
    mostrarSistema: function(){
        console.log(`El sistema operativo del telefono ${this.marca} ${this.modelo} es: ${this.sistemaOperativo} y la RAM es de ${this.RAM}Gb`)
    }

};
telefono.mostrarSistema();

//PUNTO 32 Y 34
const animal = {
    tipo:'Vaca',
    sonido:'Muuu',
    mostrarSonido: function(){
        console.log(`El animal es una ${this.tipo} y su sonido es ${this.sonido}`)
    }
};
animal.mostrarSonido();

//PUNTO 33
console.log(`el sonido del animal es: ${animal.sonido}`);

//PUNTO 35
const vuelo ={
    aerolinea: "AirLatam",
    numeroVuelo: 25,
    horaSalida: "3:15 PM"
};

//PUNTO 36
console.log(`Su aerolinea es: ${vuelo.aerolinea} y el numero de vuelo es el: ${vuelo.numeroVuelo}`);

//PUNTO 37
vuelo.destino = "Madrid";
console.log(vuelo);

//PUNTO 38
const jugador = {
    nombre:"maikol",
    equipo:"Aguilas",
    posicion:"Central",
    mostrarPosicion: function(){
        console.log(`La posicion del jugador ${this.nombre} es: ${this.posicion}`);
    }
};
//PUNTO 39
console.log(`El jugador ${jugador.nombre} esta en el equipo ${jugador.equipo}.`);

//PUNTO 40
jugador.mostrarPosicion();