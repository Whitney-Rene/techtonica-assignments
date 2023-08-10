let btn = document.getElementById("btn");
let
let output = document.getElementById("output");

function resetGame() {
    number = Math.floor(Math.random() * 5) + 1;
    output.innerHTML = "";
    output.style.color = "navy";
}

// let number = Math.floor(Math.random() * 5) + 1;

btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if(input == "") {
        output.innerHTML = "you must enter something"
        output.style.color = "navy";
    } else if (input <= 0 || input > 5){
        output.innerHTML = "remember to guess between numbers 1 - 5"
        output.style.color = "dimgray";
    } else if (input < number){
        output.innerHTML = "too low";
        output.style.color = "white";
    } else if (input > number){
        output.innerHTML = "too high";
        output.style.color = "saddlebrown";
    } else if(input == number){
        output.innerHTML = `You guessed correctly, the number was ${number}`
        output.style.color = "hotpink";
    }
});

//play again button?? / how to reset the game? 
//what if people don't enter a number? Like, if they enter a word, something that is not a number?
