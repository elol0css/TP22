

// CHECKBOXS

let sauceTomate= document.getElementById("optionSauceTomate").checked;
let pepperoni= document.getElementById("optionPepperoni").checked;
let champignons= document.getElementById("optionChampignons").checked;
let tomate= document.getElementById("optionTomate").checked;
let piments= document.getElementById("optionPiments").checked;

let sauceTomateValue= document.getElementById("optionSauceTomate").value;
let pepperoniValue= document.getElementById("optionPepperoni").value;
let champignonsValue= document.getElementById("optionChampignons").value;
let tomateValue= document.getElementById("optionTomate").value;
let pimentsValue= document.getElementById("optionPiments").value;

let imagePizza= document.getElementById("pizza");


function ajouterSauceTomate() {

    if (sauceTomate == false) {
    let sauceTomateImg= document.createElement("img");
    sauceTomateImg.src= "../img/sauce.png";
    sauceTomateImg.alt= sauceTomateValue;
    sauceTomateImg.className= "ingredient_affiche";
    sauceTomateImg.id= "sauceTomate";
    imagePizza.append(sauceTomateImg);
    }
    else {
    
    }

}

function ajouterPepperoni() {
    if (sauceTomate == false) {
        let sauceTomateImg= document.createElement("img");
        sauceTomateImg.src= "../img/sauce.png";
        sauceTomateImg.alt= sauceTomateValue;
        sauceTomateImg.className= "ingredient_affiche";
        sauceTomateImg.id= "sauceTomate";
        imagePizza.append(sauceTomateImg);
        }
}

function ajouterChampignons() {
    if (sauceTomate == false) {
        let sauceTomateImg= document.createElement("img");
        sauceTomateImg.src= "../img/sauce.png";
        sauceTomateImg.alt= sauceTomateValue;
        sauceTomateImg.className= "ingredient_affiche";
        sauceTomateImg.id= "sauceTomate";
        imagePizza.append(sauceTomateImg);
        }
}

function ajouterTomate() {
    if (sauceTomate == false) {
        let sauceTomateImg= document.createElement("img");
        sauceTomateImg.src= "../img/sauce.png";
        sauceTomateImg.alt= sauceTomateValue;
        sauceTomateImg.className= "ingredient_affiche";
        sauceTomateImg.id= "sauceTomate";
        imagePizza.append(sauceTomateImg);
        }
}

function ajouterPiments() {
    if (sauceTomate == false) {
        let sauceTomateImg= document.createElement("img");
        sauceTomateImg.src= "../img/sauce.png";
        sauceTomateImg.alt= sauceTomateValue;
        sauceTomateImg.className= "ingredient_affiche";
        sauceTomateImg.id= "sauceTomate";
        imagePizza.append(sauceTomateImg);
        }
}

// LISTE DÉROULANTE


let formulaireCheese= document.getElementById("optionsFromages");
let cheeseChoice= formulaireCheese.optionsFromages.value;
let cheeseImg= document.createElement("img");

if (document.getElementById("imageCheeseChosen") != null) {
    formulaire.removeChild(document.getElementById("imageCheeseChosen"));
}


function ajouterAucunFromage() {

 if (cheeseChoice= "aucun")  {
    return;

 }
}

function ajouterMozzarella() {

if (cheeseChoice= "mozzarella")  {
cheeseImg.src= "../img/mozzarella.png";
cheeseImg.alt= cheeseChoice;

 }
}

function ajouterCheddar() {

    if (cheeseChoice= "cheddar")  {
cheeseImg.src= "../img/cheddar.png";
cheeseImg.alt= cheeseChoice;

    }
}

function ajouterOka() {

    if (cheeseChoice= "oka")  {
cheeseImg.src= "../img/oka.png";
cheeseImg.alt= cheeseChoice;

    }
}

cheeseImg.id= "imageCheeseChosen";