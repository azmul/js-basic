let firstName = Symbol();
let secondName = Symbol();

let person ={};
person[firstName] = 'Azmul';
person[secondName] = 'Hossain';

person.age = 20;
person.graduate = 'BSC';

for(let i in person){
    console.log(`${person[i]}`); // Symbol always stay hidden in loop
}

console.log('------------------------');

let clientName = Symbol('Client Name');
let client = {};
client[clientName] = 'Pathao';

console.log(client);
console.log(client[clientName]);
console.log(clientName);