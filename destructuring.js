let client = {
    membership: 'Premium',
    balance: 1000,
    data:{
        name: 'Azmul',
        lastName: 'Hossain',
        living:{
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    },
    lastMovements: ['12-09-2018','13-09-2017','13-09-2016']
}

let {
    data:{
        living
    },
    lastMovements:[,,last]
} = client;

console.log(living);
console.log(last);

// Function Destructuring
function reservation(
   complete,
   {
       paymentMethod = 'cash',
       amount = 1000,
       days = 10
   }
){
   console.log(paymentMethod);
   console.log(amount);
   console.log(days);
}

reservation(true, {
    paymentMethod: 'credit card',
    amount: 3000
});