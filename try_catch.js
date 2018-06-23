
// Kill script 

//someting();   // reference error show and kill script

// function getClients(){
//     console.log("Downloading...");

//     setTimeout(function(){
//        console.log("complete...")
//     },3000)
// }

// getClients();

//  ----  Avoid kill script use try catch -----
try{
    someting();
}catch(error){
    console.log(error);
}finally{
    console.log("Always execute"); // Always execute
}

function getClients(){
    console.log("Downloading...");

    setTimeout(function(){
       console.log("complete...")
    },3000)
}

getClients();

