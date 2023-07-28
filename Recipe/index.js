
//Added an item to my unorderded list, bold and gray
let newListItems = document.createElement("li");
newListItems.textContent = "don't forget to add LOTS OF LOVE!";
newListItems.style.color = "#505050";
newListItems.style.fontWeight = "bold";
document.querySelector("ul").appendChild(newListItems);

//Added an item to my orderded list, bold and gray
let newInstruction = document.createElement("li");
newInstruction.textContent = "Let cool and ENJOY!";
newInstruction.style.color = "#505050";
newInstruction.style.fontWeight = "bold";
document.getElementById("Instructions").appendChild(newInstruction);

//Create a button, label it "do you like vegan cornbread?"
let containerOne = document.querySelector("#container1");
let duhButton = document.createElement("button");
duhButton.innerText = "Do you like Vegan Cornbread?!!"
containerOne.appendChild(duhButton);

//Show a response of "of course you do, that is why you are here"
duhButton.addEventListener("click", function(){
    duhButton.innerText = "Of course, YOU DO! That is why you are here!";
});
