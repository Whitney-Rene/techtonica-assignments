let btn = document.getElementById("btn");
let output = document.getElementById("output");

let number = Math.floor(Math.random() * 10) + 1;

btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if(input == number){
        output.innerHTML = `You guessed correctly, the number was ${number}`
    } else if (input < number){
        output.innerHTML = "too low";
    }
    if (input > number){
        output.innerHTML = "too high";
    }
});
