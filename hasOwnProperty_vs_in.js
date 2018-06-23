// "in" will also return true if key gets found somewhere in the prototype chain, 
// whereas Object.hasOwnProperty (like the name already tells us), 
// will only return true if key is available on that object directly
// (its "owns" the property).

function TestObj(){
    this.name = 'Dragon';
}
TestObj.prototype.gender = 'male';

var o = new TestObj();

console.log(o.hasOwnProperty('name')); // true
console.log('name' in o); // true

console.log(o.hasOwnProperty('gender')); // false
console.log('gender' in o); // true