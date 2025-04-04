// let newBtn = document.createElement("button");

// newBtn.innerText="Click Me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";

// let bodyEle = document.querySelector("body");
// bodyEle.prepend(newBtn);

// let para = document.querySelector("p");
// para.classList.add("newClass");

let btn = document.getElementById("modeBtn");
let currentMode = "lightMode";
btn.addEventListener("click",() => {
    if(currentMode === "lightMode") {
        currentMode="darkMode";
        document.querySelector("body").style.backgroundColor="black";
    } else {
        currentMode = "lightMode";
        document.querySelector("body").style.backgroundColor="white";
    }
});

