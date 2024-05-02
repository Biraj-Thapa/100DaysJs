//simple password validator
//write a function called simplePasswordValidator that takes a single parameter
//the password must contains at least one lowercase,one uppercase letter and one digit.
//the length must be at least 8 characters.

const simplePasswordValidator = (password) => {
    if(password.length>=8){
        if(password.match(/\d/g) && password.match(/[a-z]/g) && password.match(/[A-Z]/g))
            return true
        return false
    }
    return false
}
console.log(simplePasswordValidator("birajthapa1"))
console.log(simplePasswordValidator("B1iraj@2"))