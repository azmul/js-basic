// Generator
function *createGenerator(){
    yield 1;
    yield true;
    yield 'hello generator';
}

let generator = createGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log('-----------------------------');

function *newGenerator(cart){
    for(let index = 0 ; index<= cart.length; index++){
        yield cart[index];
    }
}
let cart = ['Product 1','Product 2','Product 3'];

let newgenerator = newGenerator(cart);
console.log(newgenerator.next());
console.log(newgenerator.next());
console.log(newgenerator.next());
console.log(newgenerator.next());