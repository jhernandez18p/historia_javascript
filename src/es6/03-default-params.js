// Método antiguo
function newUser(name, age, country){
    var name = name || "Josmer";
    var age = age || 28;
    var country = country || "VE";
    console.log(name, age, country);
}

newUser();
newUser("Joiner");
newUser("Joiner", 20,);

// Estilo EcmaScrip 6 
function newAdmin (name = "Josmer", age = 28, country = "VE"){
    console.log(name, age, country);
}
newAdmin();
newAdmin("Joiner");
newAdmin("Joiner", 20,);