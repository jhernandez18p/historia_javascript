// Template literals, nos permiten concatenar string y jugar con variables
// crear estructuras complejas.
// se usa el simbolo `` (comillas francesas)

let hello = "Hello";
let world = "World";
let oldWay = hello + " " + world + "!";

// Template literals
let newWay = `${hello} ${world}!`;

console.log(oldWay);
console.log(newWay);

// multi-line string
let lorem = "este string da error \"
ya que no cumple con los estandares de string"; //invalid o unexpected token (falto cerrar el simbolo de " del estring)

let lorem1 = "lorem ipsum \n" + "new line string";
console.log(lorem);

let lorem2 = `Esta es una 
frase de 
multiples lineas`;
console.log(lorem2);