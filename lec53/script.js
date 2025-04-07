// Events and Listeners.

// Browser Events
// An event is an activity/announcement --> click(Example)

// monitorEvents(document); --> Execute this in the console 
// Then click on anything it will show all the events that are present on that particular element(the clicked element);

// unMonitorEvents(document); --> Execute this in the console 
// This will hide the events

// event Target -->Entity where the event is received
// We may have applied an event listener
// Ex:- CLick on the Button
// In event listener we define what to be performed when the event occurs

// Event listener can be added and removed also

// <event_type>.addEventListener("event_type",function)  
// Example :- 
function changeText() {
    let element = document.getElementById('fpara');
    element.innerText="This is something";
    alert("Namsthe Dunia");
}
let fpara = document.getElementById('fpara');
fpara.addEventListener("click",changeText);
// In th second parameter only the name of the function should be given without ()
// If we give () the function will be executed directly event if the event doesn't takes place

// fpara.removeEventListener("click",changeText);

// It is a best practice to write the function seperately because
// the function that is provided in the add and remove event listener should be same.
// The reference of the function must be same. ---> that is same enity and same object


// Phases of an event
/* <div>
    <article>
        <h1></h1>
        <p></p>
    </article>
</div> */
// Whenever an event is captured on p --> Starts from div-->article-->p
// capturing phase -- > (div+article) --> The traversing phase
// on p --> At target phase
// Bubbling phase --> The returning from p to div 

// addEventListener -- by default applies on the bubbling phase
// To hit the event listener in capturing phase --> we have to pass useCapture value as true
// Not possible to add in the target phase
fpara.addEventListener("click",changeText,true);


// Event object --> contains all the information about the event 
// Example 
function changeTextTo(even) {
    // Prints the event
    // Not mandatory to use the same name as event
    console.log(even);
    let ele = document.getElementById('spara');
    ele.innerText="This is Vanakam";
}
let spara = document.getElementById('spara');
spara.addEventListener("click",changeTextTo);


// Change default behaviour --> We can change the default behaviour of the elements
// Ex :- Anchor tag is used to redirect to a link by default


let anchorElement = document.getElementById("fanchor");

anchorElement.addEventListener("click",function(event) {
    event.preventDefault();
    anchorElement.textContent="Click Done";
});

// Avoiding to many event listeners
// It starts from 2 because other paragraphs are also selected

let paras = document.querySelectorAll('p');
function alertPara(event){
    alert("You have clicked "+event.target.textContent);
    console.log(event.target);
}
for(let i=0;i<paras.length;i++) {
    let para = paras[i];
    para.addEventListener("click",alertPara);
}

// Directly add the listener on the div instead of all p tags

let myDiv = document.querySelector(".wrapper");
myDiv.addEventListener("click",alertPara);

// The click should work only for span tag

function alertParaSpan(event) {
    if(event.target.nodeName==='SPAN') {
        alert("You have clicked "+event.target.textContent);
        console.log(event.target);
    }
}

{
let myDiv = document.querySelector(".wrapper");
myDiv.addEventListener("click",alertParaSpan);
}

// DOMContentLoaded --> In network
document.addEventListener('DOMContentLoaded', function(){
    let newElement = document.createElement('p');
    newElement.textContent = 'Namasthe bhai';
    let child = document.getElementById('fpara');
    console.log('DOMContent is Loaded');
    child.insertAdjacentElement('beforebegin', newElement);
});

