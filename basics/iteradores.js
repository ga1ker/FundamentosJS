//Iteradores de arrays
const fruits = ['apple', 'melon', 'orange', 'cherry'];

//for each
fruits.forEach(
    function (fruit){
        console.log(`Fruta ${ fruit }`)
    }
);

console.log('Arrow Functions')
fruits.forEach(
    (fruit) => {
        console.log(`Fruta ${ fruit }`)
    }
);

console.log('Arrow Functions Siplified')
fruits.forEach((fruit) => console.log(`Fruta ${ fruit }`));

const fruitsMayus = fruits.map(
    fruit => {
        return fruit.toUpperCase();
    }
);
console.log('*'.repeat(20));
console.log(fruits);
console.log(fruitsMayus);

const numbers = [1,2,3,4,5]
const squares = numbers.map(num => num * num);
console.log(numbers);
console.log(squares);

//filter()
//crea un array nuevo a partir de una nueva condición
console.log('-'.repeat(20) + 'Filter')
const startsWithA = fruits.filter(fruit => fruit.startsWith('a'));
console.log(fruits);
console.log(startsWithA)

const pares = numbers.filter(num => num%2===0)
console.log(numbers);
console.log(pares);

//reduce()
//retorna un único valor a partir del array original
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a, b) => a* b);
console.log(numbers);
console.log(factorial);

//some()
//evalua cada elemento retorna true si almenos uno cimple con la condicion
console.log(numbers.some(num=> num >=5));
console.log(numbers.some(num=> num >6));

//every()
//regresa true si todos cumplen
console.log(numbers.every(num=> num > 0));
console.log(numbers.every(num=> num > 4));

console.log(fruits);
console.log(fruits.join(' - '));