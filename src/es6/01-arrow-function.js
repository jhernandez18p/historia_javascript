// expresión de función = es una estructura que nos permite crear nuevas funciones 
// en medio de cualquier expresión (var, let o const)

var myVarFun = function(){
    console.log("My var function")
};
let myLetFun = function(){
    console.log("My let function")
};
const myConstFun = function(){
    console.log("My const function")
};

myLetFun();
myVarFun();
myConstFun();

// funciones regulares
function cuadrado(num) {
    return num * num;
}

console.log(cuadrado(2));

// Arrow Function = funciones flecha
const cuadrado = (num) => {
    return num * num
}
console.log(cuadrado(2));

// misma función pero reducida
const cuadrado = num => num * num;
console.log(cuadrado(2));