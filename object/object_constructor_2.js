// Object Constructor
function Client(name, balance){
    this.name = name;
    this.balance = balance;
}
Client.prototype.membership = function (){
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
Client.prototype.clientInfo = function(){
    return `Name: ${this.name}, Balance: ${this.balance}, Membership:${this.membership()}`
}
Client.prototype.withdraw = function(amount){
    return this.balance -= amount;
}
Client.prototype.deposit = function(amount){
    return this.balance += amount;
}
Client.prototype.getBalance = function(amount){
    return this.balance;
}

let client1 = new Client("azmul", 2000);
let client2 = new Client("nazmul", 1000);

console.log(client1.withdraw(1500));
console.log(client1.clientInfo());


// Business Constructor
function Business(name,balance,phone,category){
    Client.call(this,name,balance);
    this.phone = phone;
    this.category = category;
}
// Inherite Client Constructor
Business.prototype = Object.create(Client.prototype);
// Return the constructor as Business
Business.prototype.constructor = Business;
// Override method
Business.prototype.clientInfo = function(){
    return `Name: ${this.name}, 
            Balance: ${this.balance},
            Membership:${this.membership()}
            Phone: ${this.phone}
            Category: ${this.category}`
}

let newbusiness = new Business('udemy',100000,1434234324,'education');
console.log(newbusiness);
console.log(newbusiness.withdraw(500));
console.log(newbusiness.clientInfo());