// DOM Manipulation

// Window --> Global Object
// window.console.log();
// The window object is created by the browser.

// DOM --> Document Object Model.
// (HTML Code is converted into an Js Object) => That object is called Document.
// Characters --> tags(when in <>) 
// tags get converted into tokens by the tokenizer 
// The tokens then get converted into Node(Like in a tree)
// DOM is a tree like structure.

// BOM --> Browser Object Model
// All the interactions with the browser except the HTML part comes under the BOM such as navigation,screen size,history etc

// How can we change the html using js ??

// 1. Access
// Using id,className,TagName etc

document.getElementById("id");
document.getElementsByClassName("className");
document.getElementsByTagName("p");
// Returns only first element.
document.querySelector("#id");
document.querySelector(".className");
document.querySelector("p");
// Returns all the elements
document.querySelectorAll(".className");
document.querySelectorAll("p");

// Hack(Important)
// When you want to access an alement just inspect that element which will show ($0)
// Now in the console type $0 you will get the selected element.

// We can also store the selected element using the below syntax
// let variable = $0


// 2. Update the elements 


let leni = document.getElementById("leni");
let parent = leni.parentElement;
// let heading = document.createElement('h1')
// heading.innerText="Unna Levana Levanate!!"
// leni.insertAdjacentElement("beforebegin",heading)
parent.removeChild(leni);

