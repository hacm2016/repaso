//let date=new Date();
//console.log('la fecha es: ', date );
//1) Declarar todos los tipos de datos. y cambiar de string-number, number-string, string-boolean, boolean-string
//2) Evaluar los tipos de datos y retornar el booleano String, Number, etc...
//3) Crear 2 palabras y manipularlo formando palabras entre ellos. [Hola], [Como eres,Jose,estas]
//4) Retornar la longitud y el tipo de dato de los siguientes elementos: Hola, 99, "780", true, "true", undefiend, null


//1
console.log('Ejercicio 01: ' );

let stringdatoa='1234';
let  numero = 12345;
let cadena ='esto es una cadena';
let booleano = true;

let stringtonumero = Number(stringdatoa); 
console.log('el string a número es : ', stringtonumero );


let numerotostring = String(numero);
console.log('El número a cadena: ', numerotostring );

let stringtoboolean=Boolean(cadena);
console.log('El string a boolean es: ', stringtoboolean );

let booleantostring=String(booleano);
console.log('El boolean a string es: ', booleantostring );

// 2 evaluar los tipos de datos
console.log('Ejercicio 02: ' );

let  numero2 = 12345;
let cadena2 ='esto es una cadena';
let booleano2 = true;
console.log('El numero2 es: ',typeof(numero2) );
console.log('El cadena2 es: ', typeof(cadena2) );
console.log('El booleano2 es: ', booleano2 );
// 3 crear palabras y manipularlo
let palabra1=['Hola'];
let palabra2= ['Como eres','Jose','estas'];
console.log('Ejercicio 03: ' );
console.log('El ejercicio es: ', palabra1[0] + ' '  + palabra2[0]);


//4   true, "true", undefiend, null
console.log('Ejercicio 04: ' );

let stringdato='Hola';
let numerodato=99;
let stringdatonum='780';
let boleanodato=true;
let booleanostring="true";
let indefinidodato=undefined;
let nulldato=null;

console.log('El stringdato  longitud es: ', stringdato.length,typeof(stringdato) );
console.log('El numerodato  longitud es: ', String(numerodato).length ,typeof(numerodato));
console.log('El stringdatonum  longitud es: ', stringdatonum.length ,typeof(stringdatonum));
console.log('El boleanodato  longitud es: ', String(boleanodato).length ,typeof(boleanodato));
console.log('El booleanostring  longitud es: ', String(booleanostring).length ,typeof(booleanostring));
console.log('El indefinidodato  longitud es: ', String(indefinidodato).length,typeof(indefinidodato) );
console.log('El nulldato  longitud es: ', String(nulldato).length ,typeof(nulldato));







