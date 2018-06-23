let a = 'a';
let b = 'b';
const c = 'c';

function function_scope (){  // Functional Scope
    //let a = 'A';
    let b = 'B';
    const c = 'C';
    console.log(`Functional Scope: ${a} ${b} ${c}`); // a B C
}
function_scope();

if(true){   // Block Scope
    //let a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log(`Block Scope: ${a} ${b} ${c}`); // Block Scope  // a BB CC
}

console.log(`Global Scope: ${a} ${b} ${c}`); // Global Scope  // a b c

