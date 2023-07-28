
//Added an item to my unorderded list, bold and gray
let newListItems = document.createElement("li");
newListItems.textContent = "don't forget to add LOTS OF LOVE!";
newListItems.style.color = "teal";
newListItems.style.fontWeight = "bold";
document.querySelector("ul").appendChild(newListItems);

//Added an item to my orderded list, bold and gray
let newInstruction = document.createElement("li");
newInstruction.textContent = "Let cool and ENJOY!";
newInstruction.style.color = "teal";
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

//Change background color to wheat/gray
let htmlEle = document.querySelector("html");
htmlEle.style.backgroundColor = "#f2f2f2";

//Change paragraph color to teal
let paraId = document.getElementById("paragraph");
paraId.style.color = "#008080";

//Change background and text
function isValidColr(string) {
    const validColor = new Option().style;
    validColor.color = string;
    return validColor.color === string.toLowerCase();
  };
  
  let userInputOne = prompt("What TEXT color would you like?");
  console.log(userInputOne);
  if (isValidColr(userInputOne)) {
    let bodyElemOne = document.querySelector("body");
    bodyElemOne.style.color = userInputOne;
  } else {
    alert("This is not a valid color.")
  }
  
  let userInputTwo = prompt("What BACKGROUND color would you like?");
  console.log(userInputTwo);
  if (isValidColr(userInputTwo)) {
    let bodyElemTwo = document.querySelector("body");
    bodyElemTwo.style.backgroundColor = userInputTwo;
  } else {
    alert("This is not a valid color.")
  }

//Issues:
// Couldn't get paragrpaph to turn pink on media query CSS
// Bullet points and numbers are not centered

//Want to keep working on:
//Add an extra website to "Other Links"
let externalLinks = document.getElementsByClassName("ExtLin");
