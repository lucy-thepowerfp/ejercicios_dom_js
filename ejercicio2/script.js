//2.1
document.body.appendChild(document.createElement("div"));

//2.2
let divp = document.createElement("div");
let pdiv = document.createElement("p");

divp.appendChild(pdiv);
document.body.appendChild(divp);

//2.3
let div3 = document.createElement("div");
for  (let i = 0; i < 6; i++){
    let p3 = document.createElement("p");
    div3.appendChild(p3);
}
document.body.appendChild(div3);

//2.4 
let p4 = document.createElement("p");
p4.textContent = "Soy dinámico!";
document.body.appendChild(p4);

//2.5 
document.querySelector(".fn-insert-here").textContent = "Wubba Lubba dub dub";

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul6 = document.createElement("ul");
for (let i = 0; i < apps.length; i++){
    let li6 = document.createElement("li");
    li6.textContent = apps[i];
    ul6.appendChild(li6);
}

document.body.appendChild(ul6);

//2.7
document.querySelectorAll(".fn-remove-me").forEach(element => element.remove());

//2.8
const divs8 = document.querySelector("div");
const p8 = document.createElement("p");
p8.textContent = "Voy en medio!";
divs8.insertAdjacentElement("afterend", p8);

//2.9
document.querySelectorAll(".fn-insert-here").forEach(div => {
    if (div.tagName == "DIV"){
        let p9 = document.createElement("p");
        p9.textContent = "Voy dentro!"; 
        div.appendChild(p9);
    }
});

    
