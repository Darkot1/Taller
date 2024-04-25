
//Punto 1
let num = 10;
let newNum = Number(40);
console.log(newNum);

//Punto 2
console.log(Number.MAX_VALUE);

//Punto 3
console.log(Number.MIN_VALUE);

//Punto 4
console.log(Number.MAX_SAFE_INTEGER);

//Punto 5
console.log(Number.MIN_SAFE_INTEGER);

//Punto 6
console.log(Number.isFinite(num));

//Punto 7
console.log(Number.isInteger(num))

//Punto 8
console.log(Number.isSafeInteger(num));

//Punto 9
console.log(num.toExponential(9));

//Punto 10
console.log(num.toFixed(3));

//Punto 11
console.log(num.toPrecision(10));

//Punto 12
let num2 = "30";
console.log(Number.parseInt(num2));

//Punto 13
let text = "42";
let parseInt = Number.parseInt(text,10);
console.log(parseInt);

//Punto 14
let text2 = "25.5"
console.log(Number.parseFloat(text2));

//Punto 15
console.log(Number.parseFloat(text2,10));

//Punto 16
console.log(num.toString());

//Punto 17
let num3 = -50;
console.log(Math.abs(num3));

//Punto 18
console.log(Math.sign(num3));

//Punto 19
console.log(Math.exp(num3));

//Punto 20
console.log(Math.expm1(num));

//Punto 21
let num4 = 10;
let num5 = 20;
let num6 = 15;
console.log(Math.max(num4, num4, num6));

//Punto 22
console.log(Math.min(num4,num5,num6));

//Punto 23
console.log(Math.pow(num4,2));

//Punto 24
console.log(Math.sqrt(num4));

//Punto 25
console.log(Math.cbrt(num4));

//Punto 26
console.log(Math.imul(num4,num6));

//Punto 27
console.log(Math.clz32(num5));

//Punto 28
console.log(Math.random(0,1));

//Punto 29
let num7 = 34.3;
console.log(Math.round(num7));

//Punto 30
console.log(Math.ceil(num7));

//Punto 31
console.log(Math.floor(num7));

//Punto 32
console.log(Math.fround(num7));

//Punto 33
console.log(Math.trunc(num7));

//Punto 34
console.log(Math.sin(num6));

//Punto 35
console.log(Math.cos(num6));

//Punto 36
console.log(Math.tan(num6));

//Punto 37
console.log(Math.hypot(num4,num5,num6));

//Punto 38
console.log(num5.toFixed() + Number.parseInt(num5));
//
let resultado = (num5 + num5).toFixed(2);
let parseresult = Number.parseInt(resultado);
console.log(parseresult)

//Punto 39
let num11= "10";
let num12= "5";

let result = (Number.parseFloat(num11) / Number.parseFloat(num2)).toPrecision(4);
console.log(result);

//Punto 40
let random = Math.random(0,10);






