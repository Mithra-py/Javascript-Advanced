//* DOM Selectors
console.log("*****************SELECTORS*****************")

//* GETELEMENTBYID()

document.getElementById("header");
console.log(header);


//? Paragraph Style
header.style.color = "red"


//? Button Style

const button = document.getElementById("btn");
btn.style.backgroundColor = "black";
btn.style.color = "yellow";
btn.style.fontSize = "2rem"


//! GETELEMENTBYTAGNAME()
//? İmg Style

const img = document.getElementsByTagName("img");
console.log(img);

img[0].style.border = "solid";
img[0].style.borderColor = "red";
img[0].style.transform = "rotate(-5deg)";


//? H1 Style

const par = document.getElementsByClassName("par");
// par[0].textContent = "DOM Manipülasyonu";
// par[0].innerText = "DOM Manipülasyonu";
par[0].innerHTML += ' <a href="https://www.javascript.com">Java</a>';


//? QUERYSELECTOR()

document.querySelector("title").textContent = "JS-A1";

const myPars = document.querySelectorAll("p");
console.log(myPars);

myPars.forEach((p) => console.log(p.textContent));
myPars.forEach((p) => console.log(p.innerText));
myPars.forEach((p) => console.log(p.innerHTML));


const myPars1 = document.getElementsByClassName("par");
console.log(myPars);

//! HTML Collectiondan Arraye çevirme yöntemleri
//? 1.Array.from()
const myParsArray = Array.from(myPars1);
console.log(myParsArray);
myParsArray.forEach((p) => console.log(p.innerText));

//? 2.Spread/rest
[...myPars1].forEach((p) => console.log(p.innerText));


//! querySelector ile CSS vari seçim yapmak mümkündür.
//! CSS Selector'lerin hepsini kullanmak mümkündür.
console.log(document.querySelector('section p a'));
