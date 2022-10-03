//*                     EVENTS
console.log("*********** EVENTS ************")

//* Mouse Over, Mouse Out
//? Only Javascript
// document.getElementById("header").onmouseover= function(){
//     document.getElementById("header").style.color="red"
// }

const header = document.getElementById('header');
header.onmouseover=function(){
    header.style.color='red';
}

header.onmouseout=function(){
    header.style.color='black';
}


// Only Javascript - addEvenListener()

const myImg = document.querySelector("img");

myImg.addEventListener("mouseover", () => {
    myImg.style.transform = "translateY(5px)";
});

myImg.addEventListener("mouseout", () => {
    myImg.style.transform = "translateY(-5px)";
});


//* Button onclick
const button = document.querySelector("#btn");

button.addEventListener("click", function(e){
    document.querySelector("body").style.backgroundImage= "linear-gradient(to right, purple, yellow)";
    button.textContent = "Search";
});













