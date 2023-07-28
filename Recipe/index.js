
let newListItems = document.createElement("li");
newListItems.textContent = "don't forget to add LOTS OF LOVE!";
newListItems.style.color = "#505050";
newListItems.style.fontWeight = "bold";
document.querySelector("ul").appendChild(newListItems);

let newInstruction = document.createElement("li");
newInstruction.textContent = "Let cool and ENJOY!";
newInstruction.style.color = "#505050";
newInstruction.style.fontWeight = "bold";
document.getElementById("Instructions").appendChild(newInstruction);

let otherLinks = document.getElementById("OtherLinks"); 