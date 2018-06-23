// Simple object declaration
let client ={
    name: "azmul",
    balance : 2000,
    membership: function (){
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
console.log(client);
console.log(client.name);
console.log(client.membership());