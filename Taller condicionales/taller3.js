//Punto 1
let numberNegative = -5;

if (numberNegative < 0) {
    console.log("El numero es Negativo :D");
}else console.log("El numero es Positivo :c");


//Punto 2
let numberPositive = 5;

if (numberPositive >= 0) {
    console.log("El numero es Positivo :D");
}else console.log("El numero es Negativo :c");


//Punto 3
let numberPar = 2;
if (numberPar %2 ==0) {
    console.log("El numero es Par");
}else console.log("El Impar :c");

//Punto 4
let numberImpar = 3;
if (numberImpar%2 != 0) {
    console.log("El numero es Impar");
}else console.log("El Par :c");

//Punto 5
let numberMulti = 10;
if (numberMulti %5 == 0) {
    console.log("El numero es multiplo de 5 :D");
}else console.log("El numero no es multiplo de 5 :c");

//Punto 6
let numberdiv = 3;
if (numberdiv %3 == 0) {
    console.log("El numero es divisible entre 3 :D");
}else console.log("El numero no es divisible entre 3 :c");

//Punto 7

let = number100 = 103;
if (number100 > 100) {
    console.log(`El numero: ${number100} es mayor a 100 :D`);
}else console.log("El numero no es mayor a 100 :c")

//Punto 8
let numberMe = -46;
if (numberMe >= -50 && numberMe <= 0){
    console.log(`El numero ${numberMe} es menor de -50`);
}else console.log("El numero no es menor que -50");

//Punto 9
let numberRange = 32;
if (numberRange >= 20 && numberRange <= 50){
    console.log(`El numero ${numberRange} esta en el rango`);
}else console.log(`El numero ${numberRange} no esta en el rango`);

//Punto 10

let numberZero = 0;
if (numberZero == 0){
    console.log(`El numero es ${numberZero}`);
}else console.log(`El numero ${numberZero} no es cero`);

//Punto 11
let numberTo =  5;
if (numberTo >= -10 && numberTo <= 10){
    console.log(`El numero ${numberTo} es menor de -10 y mayor que 10`);
}else console.log("El numero no esta en rango");

//Punto 12
let añoBi = 2024;
if (añoBi %4 == 0){
    console.log(`El año ${añoBi} ES bisiesto`);
}else console.log( `El año ${añoBi} No es bisiesto`);

//Punto 13
let persona =  5;
if (persona >= 18){
    console.log(`la persona con edad ${persona} es mayor de edad`)
}else if(persona < 18 && persona > 0){
    console.log(`la persona con edad ${persona} es menor de edad`)
}else console.log("edad no valida");

//Punto 14
//N/N

//Punto 15
let cuadrado = 9;
if (Math.sqrt(cuadrado) % 1 === 0){
    console.log(`El numero ${cuadrado} es un cuadrado perfecto`);
}else console.log(`El numero ${cuadrado} NO es cuadrado perfecto`);

//Punto 16
let fibo = 6;



//Punto 17
let potencia = 16;
if(potencia > 0 &&(potencia & potencia -1)===0){
    console.log(`El numero ${potencia} es potencia de 2`);
} else console.log(`El numero ${potencia} no es potencia de 2`);

//Punto 18

let palindromo = 5 

//Punto 19
let frase = 'hola JavaScript';
console.log(frase.includes('JavaScript') ? 'SI tiene la frase JavaScript' : 'NO tiene la palabra JavaScript');


//Punto 20
let cadena = 'isla puntacana';
let contarCadena = cadena.length;
console.log(contarCadena >= 10 ? `La cadena ${cadena} tiene ${contarCadena} caracteres SI CUMPLE` : `la cadena ${cadena} tiene ${contarCadena} NO CUMPLE`);

//Punto 21
let minuscula = 'HOLA'
console.log(minuscula.toLocaleLowerCase() === minuscula ? `La frase ${minuscula} ESTA en minuscula` : `la frase ${minuscula} NO esta en minuscula`);

//Punto 22
let frase2 = 'hola 20';
console.log(frase2.match(/\d/)? `la frase ${frase2} tiene un numero `: `la frase ${frase2} NO tiene un numero`);

//Punto 23

