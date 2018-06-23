
function createIterator(cart){
    let index = 0;
    return {
        nextIterator: function(){
            let end = (index >= cart.length);
            let value = !end ? cart[index++] : undefined;
            return{
                end: end,
                value: value
            }
        }
    }
}

let shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

let shoppingCartIterator = createIterator(shoppingCart);

console.log(shoppingCartIterator.nextIterator());
console.log(shoppingCartIterator.nextIterator());
console.log(shoppingCartIterator.nextIterator());
console.log(shoppingCartIterator.nextIterator());
console.log(shoppingCartIterator.nextIterator());
