//3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul1 = document.createElement("ul");
for (let i = 0; i < countries.length; i++){
    let li1 = document.createElement("li");
    li1.textContent = countries[i];
    ul1.appendChild(li1);
}
document.body.appendChild(ul1);

//3.2
document.querySelectorAll(".fn-remove-me").forEach(element => element.remove());

//3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let divprint = document.querySelector("[data-function=printHere]");
let ul3 = document.createElement("ul");
divprint.appendChild(ul3)

for(car of cars){
    let li3 = document.createElement("li");
    li3.textContent = car;
    ul3.appendChild(li3);
}

//3.4
const countries4 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (country of countries4){
    let div4 = document.createElement("div");
    let title4 = document.createElement("h4");
    div4.appendChild(title4);
    title4.textContent = country.title;
    let img4 = document.createElement("img");
    img4.src = country.imgUrl;
    div4.appendChild(img4);
    document.body.appendChild(div4);
}

//3.5
let button5 = document.createElement("button");
button5.textContent = "Eliminar último div";
button5.addEventListener("click", () => {
    let divs5 = document.getElementsByTagName("div");
    let index = divs5.length - 1;
    divs5[index].remove();
    
});

document.body.appendChild(button5);

//3.6
let divs6 = document.getElementsByTagName("div");
let max = divs6.length;
for (let i = 0; i < max; i++){
    let button6 = document.createElement("button");
    button6.textContent = "Eliminar este div";
    button6.addEventListener("click", () => {
        button6.parentElement.remove();
    });
    divs6[i].appendChild(button6);
} 
