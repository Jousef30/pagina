var a=parseFloat(prompt('Ingrese a : ',''));
var b=parseFloat(prompt('Ingrese b : ',''));
var c=parseFloat(prompt('Ingrese c : ',''));
var d=parseFloat(prompt('Ingrese d : ',''));

document.getElementById("valores").innerHTML = "Valor de a : " + a + " Valor b : " + b + " Valor c : " + c + " Valor d : " + d ; 

var suma = a + b;

var rsuma = suma;

document.getElementById("suma").innerHTML = "La suma es :  " + rsuma;

var resta =c - d;

var rresta= resta;

document.getElementById("resta").innerHTML = "La resta es :" + rresta;

var resultadofinal= rsuma* rresta;

document.getElementById("resultadofinal").innerHTML = "Resultado final es  :" + resultadofinal;

//incremento de una variable

var incre = ++rsuma;

document.getElementById("incre").innerHTML = "Incremento : " + incre;

//decremento de una variable

var decre = --rresta;

document.getElementById("decre").innerHTML = "Decremento es :" + decre;


//exponenciacion

var expo = (resultadofinal**2);

document.getElementById("expo").innerHTML = "Exponenciación es :  " + expo;


//operacion combinada

var operaciones = (c + d) * (a - b);

document.getElementById("operaciones").innerHTML = "Operación Combinada (c + d) * (a - b) es : " + operaciones;


//boleans

let m=rsuma;
let n=rresta;
document.getElementById("bole").innerHTML = "Boleano de a : " + m + " Boleano de b : " + n + " ¿ A == B ?: " + (m==n);

//array

const lenguajes = ["PHP "," JAVA"," HTML"," CSS"," JAVASCRIPT"," C++"," C#"," ANGULAR"," Python"," Swift"," Visual Basic"," Android Studio"]
const toplenguajes = lenguajes;
document.getElementById("lista").innerHTML = "Lista de los 12 lenguajes de programación : "+ toplenguajes;



//function

function operadores(x,y){
    
    return x + y;
}
document.getElementById("operadores").innerHTML = "Function :" + (operadores(rsuma,rresta));




