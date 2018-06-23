// Object Constructor
function Client(name, balance){
    this.name = name;
    this.balance = balance;
    this.membership = function (){
        let name;
        if(this.balance> 1000){
            name = "Platinum";
        }else if(this.balance>500){
            name = "Glod"
        }else{
            name = "Normal";
        }
        return name;
    }
}

let client1 = new Client("azmul", 2000);
let client2 = new Client("nazmul", 1000);

console.log(client2.membership());

// String Constructor
let name1 = "azmul";
let name2 = new String("azmul");

console.log(typeof name1);
console.log(typeof name2);

if(name1 === name2){
    console.log("Yes");
}else{
    console.log("No");
}

// Number Constructor

let number1 = 10;
let number2 = new Number(10);

console.log(typeof number1);
console.log(typeof number2);

if(number1 === number2){
    console.log("Yes");
}else{
    console.log("No");
}

// Function Constructor
const function1 = function(a,b){
    return a+b;
}
const function2 = new Function('a','b','return a+b');

console.log(function1(1,2));
console.log(function1(5,5));
