class Client{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    membership(){
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
    clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}, Membership:${this.membership()}`
    }
    withdraw(amount){
        return this.balance -= amount;
    }
    deposit(amount){
        return this.balance += amount;
    }
    getBalance(amount){
        return this.balance;
    }
    static welcome(){
        return 'welcome to your bank';
    }

}

let client1 = new Client("azmul", 2000);
console.log(client1.clientInfo());
console.log(Client.welcome());

// ---------------------------------------------

// Business Class
class Business extends Client{
    constructor(name,balance,phone,category){
        // access the parent constructor properties
        super(name,balance);
        this.phone = phone;
        this.category = category;
    }
    // Over ride client info
    clientInfo(){
        return `Name: ${this.name}, 
                Balance: ${this.balance},
                Membership:${this.membership()}
                Phone: ${this.phone}
                Category: ${this.category}`
    }
    static welcome(){
        return 'welcome to your business';
    }
}

let newbusiness = new Business('udemy',100000,1434234324,'education');
console.log(newbusiness.clientInfo());
console.log(Business.welcome());