let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

for(let key in salaries){
    console.log(`${key} --- ${salaries[key]}`);
}

for(let value of Object.values(salaries)){
    console.log(value);
}

for(let value of Object.keys(salaries)){
    console.log(value);
}
