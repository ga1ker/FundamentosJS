//Funciones javascript
/*
function nombre(params){
    body function
}
const nombre = function (params){
    body function
}

*/

//Funciones sin parametros y sin retorno
function saludo(){
    console.log('Helloooo!')
}
saludo();

//Funciones con parametros sin retorno
const saludaA = function(name){
    console.log('Holaaa ' + name)
}
saludaA('Gadiel Alcazar');

//funciones con parametros y con retorno
const fact = function(num){
    if(num==0) return 1;
    return fact(num-1)*num;
}
const result = fact(5);
console.log(result);

//Arrow Functions o funciones de flecha
//Sin parametros y sin retorno
const saludaEnChino=()=>{
    console.log('Ari gatita')
}
saludaEnChino();

//con 1 parametro sin returno
const mayuscula= (word) => {
    console.log(word.toUpperCase());
}
mayuscula('Hola');


const minuscula = word => {
    console.log(word.toLowerCase());
}
minuscula('HOLA');

//dos o mas parametros y con retorno
const fullName = (firstName, lastName) =>{
    return firstName+' '+lastName;
}
const nombreCompleto=fullName('Gadiel', 'Alcazar');
console.log(nombreCompleto);

//si el return es la unica linea se puede simplificar
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble)

/*function duplica(num){
    return num *2;
}
*/