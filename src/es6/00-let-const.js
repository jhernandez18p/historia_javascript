// Var, Let y Const son palabras que nos permiten de crear o definir una variable 

// Creamos y asignamos una variable de tipo "string"
var lastName = "Hernández";
// Podemos reasignar un valor a la variable
lastName = "Pedroza";
console.log(lastName); // Imprime la ultima aignacion a var (Pedroza)

// let es una variable que funciona en el scope local y solo puede ser consumida en ese entorno 
let fruit = "Apple";
fruit = "kiwi";
console.log(fruit); // Imprime la ultima aignacion a var (kiwi)

// const
const animal = "perro";
animal = "gato"; 
console.log(animal); // error ya que "const" funciona como una constante que no debe ser reasignada 

const fruits = () => {
    if (true){
        var fruit1 = "apple"; // Scope global
        let fruit2 = "kiwi"; // Scope interno o en bloque
        const fruit3 = "Banana"; // Scope en bloque
    }
    console.log(fruit1);
    // console.log(fruit2); // Fuera del scope (Not defined)
    // console.log(fruit3); // Fuera del scope (not defined)
}

fruits();