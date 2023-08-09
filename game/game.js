let btn = document.getElementById("btn");
let output = document.getElementById("output");

let number = Math.floor(Math.random() * 25) + 1;

btn.addEventListener("clcik", function(){
    let input = document.getElementById("userInput").value;
    if(input == number){
        output.innerHTML = `You guessed correctly, your number was ${number}`
    } else if ()
})
