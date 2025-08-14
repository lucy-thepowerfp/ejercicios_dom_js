//4.1
let button1 = document.createElement("button");
button1.id = "btnToClick";
button1.textContent = "Click";
document.body.appendChild(button1);

//4.2
button1.addEventListener("click", () => {
    console.log(document.getElementsByClassName("focus")[0].value);
});

//4.3
button1.addEventListener("click", () => {
    console.log(document.getElementsByClassName('value')[0].value);
});

//4.4?
button1.addEventListener("click", () => {
    console.log(document.getElementsByClassName('click')[0].value);
});

//4.5?
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let ul5 = document.createElement("ul");
for (let i = 0; i < albums.length; i++){
    let li5 = document.createElement("li");
    li5.textContent = albums[i];
    ul5.appendChild(li5);
}
document.body.appendChild(ul5);
