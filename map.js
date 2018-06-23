let client = new Map();
client.set('name','azmul');
client.set('membership','platinum');
client.set('balance', 100);

console.log(client);

// Default value into map
let patient = new Map([['name','azmul'],['age',30]])
patient.set('name','nazmul');
console.log(patient);

// Get length of map
console.log(client.size); // 3

// access the value
console.log(client.get('name')); // azmul
console.log(client.get('balance')); // 100

// Check if a value exit on a map
console.log(client.has('name')); // true
console.log(client.has('age')); // false

// Iterate a map
client.forEach((clientInfo, index)=>{
    console.log(`${index} --- ${clientInfo}`);
})

// Remove element from map
client.delete('name');
console.log(client);

// clear the map
client.clear();
console.log(client);