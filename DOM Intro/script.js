//pushing elements one by one to the last position of the nav-links..

let linksContainer = document.getElementById("links-container");
// console.log(linksContainer);
//Home
let createLinks = document.createElement("li");
createLinks.innerHTML = `
<a href="#">Home</a>
`;
linksContainer.appendChild(createLinks);
//About
let createLinks1 = document.createElement("li");
createLinks1.innerHTML = `
<a href="#">About</a>
`;
linksContainer.appendChild(createLinks1);
//Services
let createLinks2 = document.createElement("li");
createLinks2.innerHTML = `
<a href="#">Services</a>
`;
linksContainer.appendChild(createLinks2);
//Contact
let createLinks3 = document.createElement("li");
createLinks3.innerHTML = `
<a href="#">Contact</a>
`;
linksContainer.appendChild(createLinks3);
//LogIn button
let createLinks4 = document.createElement("li");
createLinks4.innerHTML = `
<a id="button" class="" href="">LogIn</a>
`;
linksContainer.appendChild(createLinks4);

//adding active class to the createLinks4 after pushing element..
let active = document.getElementById("button");
active.classList.add("active");

//add or removing class from style sheet to the html body
let headerContainer = document.querySelector("header");

let wrapper = document.querySelector("nav");

let navLinks = document.querySelector("nav");

let textBox = document.getElementById("left-text-box");

let button = document.getElementById("btn");

headerContainer.classList.add("header-container-first");

wrapper.classList.remove("wrapper");

navLinks.classList.add("nav-links");

textBox.classList.add("text-box");

button.classList.add("btn-first");

//changing image
function changeImg() {
  let button = document.getElementById("btn");
  button.classList.remove("btn-first");
  button.classList.add("btn-second");

  let headerContainer = document.querySelector("header");
  headerContainer.classList.remove("header-container-first");
  headerContainer.classList.add("header-container-second");
}

document.add;
