let heading = document.querySelector("#h1Tag");
console.log(heading);

// get text content
console.log(heading.textContent);

// Set style 
heading.style.background = "#333";
heading.style.color = "#ffffff";
heading.style.padding = "20px";

//get h2 tag;
let createHeading = document.createElement("h2");
createHeading.id = "h2Tag";
let heading2 = document.querySelector("#h2Tag");
// Add class
heading2.classList.add('new-class1');
heading2.classList.add('new-class2');
heading2.classList.add('new-class3');
// remove class
heading2.classList.remove('new-class3');
// Set inner text
heading2.innerText = "Insert text value $15";
// Replace text content
heading2.textContent =  heading2.innerText.replace("$15","$12");
console.log(heading2);

// select class tag
let classLists = document.querySelector(".list li");
classLists.innerText = "first list";
classLists.style.color = "red";

// Get class name tags
let linkList = document.querySelectorAll(".link");
linkList = Array.from(linkList);
linkList.forEach((link, index)=>{
    link.textContent = `link ${index}`;
    link.style.color ="red";
})
console.log(linkList);

// select tag under an id
let linkListTag = document.querySelector("#linkid").querySelectorAll(".link");
linkListTag = Array.from(linkListTag);
linkListTag.forEach((link, index)=>{
    link.textContent = `linkid ${index}`;
    link.style.color ="red";
})
console.log(linkListTag);
// navigation child nodes
let navigationChildNodes = document.querySelector("#linkid");
console.log(navigationChildNodes.childNodes);
console.log(navigationChildNodes.children);
console.log(navigationChildNodes.children[0].nodeName);

navigationChildNodes.children[0].textContent = "New Text";








