// Style property --> can change many things
let spara = document.getElementById("spara");
let second = document.getElementById("sdiv")
// spara.style.backgroundColor="red";
// We can pakaa(access) only one property at a time.

// .cssText --> for mutiple
second.style.cssText;
// 'background-color: chartreuse; padding: 1.2rem;'

// To set multiple properties at a time.
// second.style.cssText = `backgroundColor:black;
// color: white`;

// setAttribute -> Over rides the existing className with the new class name(if exists)
// Not only className all the related properties
spara.setAttribute("class","myClass");
second.setAttribute("class","myClass2");

// Existing style attributes gets over written.
spara.setAttribute("style","color:white");


// .className --> Overrides the existing class name (if exists)
second.className="hello hi jee";


// .classList --> add,remove,toggle,contains
let fpara = document.getElementById("fpara");
// fpara.classList --> listof classes

// Add class
fpara.classList.add("third");

// Remove class
fpara.classList.remove("first");

// Toggle --> If present removes it --> If it doesn't contain removes it.
fpara.classList.toggle("second");

fpara.classList.contains("third");