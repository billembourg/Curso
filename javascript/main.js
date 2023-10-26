// ejercicio 1


/*function factorial(num){
    if(num != 1 ){
        let num2 = 0;
        let num1 = num*(num-1); 
        return;     
    }
    factorial(num-1);
}
console.log (factorial(3));*/

// ejercicio 2

let figuras = ['cuadrado', 'rectangulo', 'circulo', ];
let element = 'triangulo';
console.log(figuras)

function figurasAll (){
    figuras.push(element)
    console.log(figuras)
}
figurasAll();

// ejercicio 3

let frutas = ['pera', 'melon', 'fresa', 'cambur']
console.log(frutas)
function frutas1(){
    frutas.shift();
    console.log(frutas);
}
frutas1();

//ejercici4
let numeros = [1,5,2,10,13,17,12,6,8,3];
console.log(numeros)

let numerosImp = numeros.filter(
    function (numero){
        return numero % 2 != 0;
    }
);
console.log (numerosImp);

//ejercicio 5
let numeros_naturales = [1,2,3,4,5,5,6,9,8,5,6,3,4,7,8,9,5,6,9,9,5,];
let numeroX = 5;
console.log(numeros_naturales);
let numeros_finales = numeros_naturales.filter(
    function (numero){
        return numero != numeroX;
    }
);
console.log(numeros_finales);

//ejercicio 6
let frase = 'JavaScript es un lenguaje de programacion versatil y poderoso';
console.log (frase);
function NumPalabras () {
    let palabras = frase.split(' ');
    console.log (palabras.sort());
    console.log('numero de palabras: ' + palabras.length);
}
NumPalabras();
console.log(frase.toUpperCase());
console.log(frase.replace('JavaScript', 'Python'));

