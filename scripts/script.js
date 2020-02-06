"use strict";

// pull variables from HTML
const buttonUpdate = document.getElementById("buttonUpdate"),
liveInputs = document.querySelectorAll(".shoppingItem"),
shoppingListDiv = document.querySelector("#shoppingListDiv");

function generateMyList() {
    liveInputs.forEach(function(input) {
        if (input.value) {
            const shoppingList = document.createElement('li');
            shoppingList.innerHTML += input.value;
            shoppingListDiv.appendChild(shoppingList);
        }
    })
    shoppingListDiv.appendChild(shoppingList);
}

buttonUpdate.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Update button clicked");
    generateMyList();
});