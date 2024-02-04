//create variables
let btn = document.getElementById("btn");
let playAgain = document.getElementById("playAgain");
let output = document.getElementById("output");
let userInput = document.getElementById("userInput");


//eventListener for submit buttton, if else statements
btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if(input == "") {
        output.innerHTML = "you must enter something"
        output.classList.add("navyClass");
    } else if (input <= 0 || input > 5){
        output.innerHTML = "remember to guess between numbers 1 - 5"
        output.style.color = "dimgray";
    } else if (input < number){
        output.innerHTML = "too low";
        output.style.color = "";
    } else if (input > number){
        output.innerHTML = "too high";
        output.style.color = "saddlebrown";
    } else if(input == number){
        output.innerHTML = `You guessed correctly, the number was ${number}!!!`
        output.style.color = "fuchsia"; 
        output.style.border = "2px solid lightgoldenrodyellow";
        // I want the space to the left and right to be eliminated.
    }
});

// reset game function
function resetGame() {
    number = Math.floor(Math.random() * 5) + 1;
    output.innerHTML = "Guess a Number Between 1 - 5";
    output.style.color = "white";
    output.style.border = "none";  //resets the border to nothing
    userInput.value = "";
}

//reset game without refreshing the entire page
playAgain.addEventListener("click", function() {
    resetGame();
})

//played around with this?
resetGame();
