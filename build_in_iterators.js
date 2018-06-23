const cities = ['Dhaka', 'Kolkata', 'Dhelli'];
const orders = new Set(['123','321','111']);
const data = new Map();
data.set('jsLearning', 'Mordern js');
data.set('isJsGreate', true);

// entries
for(let value of cities.entries()){
    console.log(value);
}
for(let value of orders.entries()){
    console.log(value);
}
for(let value of data.entries()){
    console.log(value);
}

// values
// for(let value of cities.values()){ // not working
//     console.log(value);
// }
for(let value of orders.values()){
    console.log(value);
}
for(let value of data.values()){
    console.log(value);
}

// keys
for(let value of cities.keys()){
    console.log(value);
}
for(let value of orders.keys()){
    console.log(value);
}
for(let value of data.keys()){
    console.log(value);
}

// String Iterators
const string = 'mordern js';
for(let letter of string){
    console.log(letter);
}