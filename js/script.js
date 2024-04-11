"use strict"

//MILESTONE 0
const members = [
    {
        name: "Wayne Barnett",
        role: ["Founder", "CEO"],
        image: "wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Angela Caroll",
        role: ["Chief Editor"],
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: ["Office Manager"],
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: ["Social Media Manager"],
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: ["Developer"],
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: ["Graphic Designer"],
        image: "barbara-ramos-graphic-designer.jpg"
    },
]
//MILESTONE 1
for (let i = 0; i < members.length; i++) {
    const element = members[i];
    for (let key in element) {
        console.log(element[key]);
    }
    
}

//MILESTONE 2
const cardHolder = document.getElementById("cardholder");
let cards = "";

for (let i = 0; i < members.length; i++) {
    const element = members[i];
    let roleElem = printArray(element);
   
        cards += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src='./img/${element.image}' class="card-img-top" alt="...">

                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${roleElem}</p>
                </div>
            </div>
        </div>
        `;
    
}
cardHolder.innerHTML = cards;

function printArray(element){
    let roleElem = "";
    for (let j = 0; j < element.role.length; j++) {
        if(j >= 1){
            roleElem += " & " + element.role[j];
        }else{
            roleElem += element.role[j]
        }
        
    }
    return roleElem;
}