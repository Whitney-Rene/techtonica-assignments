// let userInput = document.getElementById('fnameinput')
// userInput.setAttribute("required", "required");

let submit = document.getElementById("submit");
console.log(submit);

document.getElementById("submit").addEventListener("click", (event) =>{
    event.preventDefault();

    //Grabs the inputs
    const username = document.getElementById("fnameinput").value;
    const email = document.getElementById("email").value;


    //validate username is not empty
    const divError = document.getElementById("emailError");
    if(username === "" || email === ""){
        divError.innerHTML = "Please enter both fields"
    } else{
        divError.innerHTML = ""
    }
    
    submit.appendChild(divError);


    // //Email validation - validate that the pattern in the email is correct
    // const secErrorDiv = document.getElementsByClassName("emailError");
    // const correctPattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(!correctPattern.test(email)){
    //     secErrorDiv.innerText = "Please enter a valid email"
    // } else{
    //     secErrorDiv.innerText = ""
    // }

    //console.log
    console.log(username);
    console.log(email);
})

