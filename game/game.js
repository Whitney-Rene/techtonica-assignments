let btn = document.getElementById("btn");
let output = document.getElementById("output");

let number = Math.floor(Math.random() * 5) + 1;

btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if(input == "") {
        output.innerHTML = "you must enter something"
        output.style.color = "hotpink";
    } else if (input <= 0 || input > 5){
        output.innerHTML = "remember to guess between numbers 1 - 5"
        output.style.color = "hotpink";
    } else if (input < number){
        output.innerHTML = "too low";
        output.style.color = "hotpink";
    } else if (input > number){
        output.innerHTML = "too high";
        output.style.color = "hotpink";
    } else if(input == number){
        output.innerHTML = `You guessed correctly, the number was ${number}`
        output.style.color = "hotpink";
    }
});
