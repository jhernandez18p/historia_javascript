// arrays destructuring 
let fruits = [
    "apple",
    "banana"
]
let [a, b] = fruits;

console.log(a, b);
console.log(fruits[0], fruits[1]); // es un poco confuso y puede conducir a error.

// object destructuring
let user = {
    username: "Josmer",
    age: 28
};
let {username, age} = user;

console.log(username, age);
console.log(user.username, user.age);

// spread operator
let person = {
    name: "Josmer",
    age: 28
}
let country = "VE";
let data = {id:1, ...person, country}; // Operador tenario o de propagación 
console.log(data);

// REST (REpresentational State Protocol o transferencia de estado representacional)
// constructor (ayuda a asugnar elemntos de un objeto a otro)

function sum(num,...values){ // REST syntax contruye un nuevo objeto desde donde se llama
    console.log(values);
    console.log(num + values[0]);
}
sum(2,1,2,3);

// Usando el spread operator, deberás combinar ambos objetos en uno solo. 
// Es posible que no se te envíe alguno de los dos objetos o ninguno

function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado",
    },
    json2 = {
        age: 12,
        color: "Blanco",
    }
    ) {
    return {
        ...json1,
        ...json2,
    };
}