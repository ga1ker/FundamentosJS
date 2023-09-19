//funciones de orden superior
//high order functions

const myFunctionWithBigName = () => {
    console.log('Funcion inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejercicio Funcion uno');
}

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('Ejecuta función dos');
}

funOne();
funTwo('Gadiek');

const funThree = (otherFunction) => {
    console.log('Inicia Función tres');
    otherFunction();
    console.log('Termina Función tres');
}

funThree(funOne);
funThree(()=> console.log('Funcion de flecha'));