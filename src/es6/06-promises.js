const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!");
        }else{
            reject("Ouch!!");
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) // Si agregamos el ";" en esta linea no corre el catch
    // .then es una frase reservada que nos permite concatenar la ejecución de codigos en las promesas.
    .catch(err => console.log(err));

