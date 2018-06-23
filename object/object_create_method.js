// Object Create
let client ={
    getBalance: function(){
        return `Hello ${this.name} your balance is ${this.balance}`
    },
    withdraw: function(amount){
        return this.balance -= amount;
    },
    deposit: function(amount){
        return this.balance += amount;
    }
}

let clientObj = Object.create(client);
console.log(clientObj);

// Attach Properties
clientObj.name = 'azmul';
clientObj.balance = 20000;
console.log(clientObj.getBalance());

// withdraw some balance
clientObj.withdraw(500);
console.log(clientObj.getBalance());

// deposit some balance
clientObj.deposit(500);
console.log(clientObj.getBalance());