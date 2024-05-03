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
let su1 = 0;



//Punto 17
let potencia = 16;
if(potencia > 0 &&(potencia & potencia -1)===0){
    console.log(`El numero ${potencia} es potencia de 2`);
} else {console.log(`El numero ${potencia} no es potencia de 2`);
}
//Punto 18
let palindromo = 131;
let cadenapali = palindromo.toString()
if (cadenapali === cadenapali.split('').reverse().join('')) {
    console.log(`${palindromo} es palíndromo`);
} else {console.log(`${palindromo} no es palíndromo`);
}

/* //Punto 19
let frase = 'hola JavaScript';
console.log(frase.includes('JavaScript') ? 'SI tiene la frase JavaScript' : 'NO tiene la palabra JavaScript');


//Punto 20
let cadena = 'isla puntacana';
let contarCadena = cadena.length;
console.log(contarCadena >= 10 ? `La cadena ${cadena} tiene ${contarCadena} caracteres SI CUMPLE con mas de 10 caracteres` : `la cadena ${cadena} tiene ${contarCadena} NO CUMPLE con al menos 10 caracteres`);

//Punto 21
let minuscula = 'HOLA'
console.log(minuscula.toLocaleLowerCase() === minuscula ? `La frase ${minuscula} ESTA en minuscula` : `la frase ${minuscula} NO esta en minuscula`);

//Punto 22
let frase2 = 'hola 20';
console.log(frase2.match(/\d/)? `la frase ${frase2} tiene un numero `: `la frase ${frase2} NO tiene un numero`);

//Punto 23
let punto = "hola.";
console.log(punto[punto.length - 1] === "." ? `la frase ${punto} SI termina con punto`: `la frase ${punto} NO termina con punto`);

//Punto 24

//-------------------------------------------------------------------------------------------------------------




//Punto 25
let laborable = "lunes";
let semana =["lunes","martes","miercoles","jueves","viernes"];

console.log(semana.includes(laborable) ?`${laborable} es laborable` 
:laborable=="sabado"? "es sabado, no es laborable"
:laborable == "domingo"?"es domingo, no es laborable"
: `${laborable} no es un dia valido`);

//Punto 26
let dia = "domingo";

let finSemana =["lunes","martes","miercoles","jueves","viernes"];
console.log(finSemana.includes(dia) ?`${dia} es dia de la semana` 
:dia=="sabado"? "es sabado, FIN DE SEMANA"
:dia == "domingo"?"es domingo, FIN DE SEMANA"
: `${dia} no es un dia valido`);


//Punto 27
let mesNum = 12;
console.log(mesNum >=1 && mesNum <= 12 ? `Es un mes valido` : `NO es un mes valido.`);

//Punto 28

let hora = 14; 
console.log(hora >=9 && hora <=18 ?`La hora esta en el rango de 9 AM a 6 PM.`:`La hora esta fuera del rango de 9 AM a 6 PM.`)


//Punto 29
let edad1 = 66;
console.log(edad1 > 0 && edad1 <18 ? `La persona con edad ${edad1} es menor de edad`
:edad1 > 65 ? `La persona con edad ${edad1} es mayor a 65 años`: `la persona con edad ${edad1} esta en un rango normal`);

//Punto 30, 31 y 32
ladoA = 4;
ladoB = 2;
ladoC = 2;
console.log(ladoA === ladoB && ladoB === ladoC ? `el triangulo es equilatero`
:ladoA === ladoB || ladoB === ladoC || ladoA === ladoC ?`El triangulo es isosceles`
:ladoA !== ladoB && ladoB !== ladoC ? `El triangulo es escaleno`: "datos no validos");

//Punto 33
let numero1 = 7;
let numero2 = 3;
console.log( numero1 > numero2 *2 ?`${numero1} es mayor que el doble de ${numero2}`:`${numero1} no es mayor que el doble de ${numero2}`);

//Punto 34
let sumNum1 = 90;
let sumNum2 = 30;
console.log(sumNum1 + sumNum2 > 100 ? `La suma de ${sumNum1} y ${sumNum2} es mayor que 100`: `La suma de ${sumNum1} y ${sumNum2} NO es mayor a 100`);

//Punto 35
let resNum1 = 50;
let resNum2 = 30;
console.log(resNum1 - resNum2 < 50 ? `La resta de ${resNum1} y ${resNum2} es menor que a 50`: `La resta de ${resNum1} y ${resNum2} es mayor que 50`);

//Punto 36 
let dobleNum1 = 20;
let dobleNum2 = 10;
console.log(dobleNum1 === dobleNum2*2 || dobleNum2 === dobleNum1 *2 ? `Uno de los números es el doble del otro`: `Ninguno de los números es el doble del otro`); 

//Punto 37
let tripleNum1 = 4;
let tripleNum2 = 6;
console.log(tripleNum1  *2 === dobleNum2 *3 || tripleNum2 *2 === tripleNum1 *3 ? `El doble de uno de los números es igual al triple del otro número`:`El doble de ninguno de los números es igual al triple del otro número`); 

//Punto 38
let sumNum3 = 25;
let sumNum4 = 24;
console.log(sumNum3 + sumNum4 === 50 ? `La suma de ${sumNum3} y ${sumNum4} es igual a 50`: `La suma de ${sumNum3} y ${sumNum4} NO es igual que 50`);

//Punto 39
let productNum1 = 30;
let productNum2 = 50;
console.log(productNum1 * productNum2 >500 ? `El producto de ${productNum1} y ${productNum2} es mayor que 500`:`El producto de ${productNum1} y ${productNum2} no es mayor que 500`)

//Punto 40
let divNum1 = 12;
let divNum2 = 3;
console.log(divNum1 / divNum2 <10 ? `la division de ${divNum1} y ${divNum2} es MENOR que 10`:`La division de ${divNum1} y ${divNum2} es mayor que 10`) */
