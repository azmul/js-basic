let shopingCart = new Set();
shopingCart.add('shirt');
shopingCart.add('Album #1');
shopingCart.add('Album #2');
shopingCart.add('Album #3');
shopingCart.add('Album #3');
shopingCart.add('Guiter');

console.log(shopingCart); // ignore duplicate item

// Get length from set
console.log(shopingCart.size); // 5

// Check if a value exit on a set
console.log(shopingCart.has('Guiter')); // true
console.log(shopingCart.has('Album #4')); // false

// Remove a item from set
shopingCart.delete('Guiter');
console.log(shopingCart);

// Iterate a set
shopingCart.forEach((product,index, isPart)=>{
    console.log(`${index} --- ${product}`); // Index and value same
    console.log(shopingCart === isPart); // true
})

// Convert the set into array
let shopingCartArray = [...shopingCart];
console.log(shopingCartArray);

// Clear the set
shopingCart.clear();
console.log(shopingCart);