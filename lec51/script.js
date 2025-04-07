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
//  --> innerhtml,outerhtml,text-content,innexText

// 1. innerhtml --> tag --> I deals only with the content inside it
document.querySelector("#anvi").innerHTML;
// to set
document.querySelector("#anvi").innerHTML='<p>Namasthe Jee</p>';

// 2. outerHtml -- >outerHTML in JavaScript is a property of an HTML element
//  that gets or sets the entire HTML including the element itself.

// Example 
{/* <div id="myDiv">
  <p>Hello</p>
</div> */}

// const div = document.getElementById('myDiv');
// console.log(div.outerHTML);
// Output: <div id="myDiv"><p>Hello</p></div>

// div.outerHTML = '<section><h2>Replaced!</h2></section>';
// Now the <div> is replaced by <section>


// 3. textContent
document.querySelector("#myDiv").textContent;
// '\n            \n            Second\n            Third\n 
// Shows spaces also
// Doesn't care about the hidden elements just prints them 


// 4. innerText
document.querySelector("#myDiv").innerText
// Second\n\nThird'
// The way we render on the screen
// If we hide something that is not visible on the screen.

// Add elements 
// appendChild,createElement

// 1. appendChild
let newEle2 = document.createElement("h1");
newEle2.textContent="Lingi";

// append child
let parent2 = document.getElementById("myDiv");
parent2.appendChild(newEle2);
// Using append child we can only add the elements at the end

// To add anywhere  
// Positions -> before begin,after begin, before end, after end.
parent2.insertAdjacentHTML("beforebegin",newEle2);
parent2.insertAdjacentHTML("afterbegin",newEle2);
parent2.insertAdjacentHTML("beforeend",newEle2);
parent2.insertAdjacentHTML("afterend",newEle2);
// The second parameter is the element to be added.

// removeChild --> to remove elements
parent2.removeChild(child);
