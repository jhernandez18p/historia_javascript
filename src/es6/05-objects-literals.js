// enhanced objects literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("jhernandez", 28, "VE", 1));