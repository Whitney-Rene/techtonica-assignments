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

    //console.log
    console.log(username);
    console.log(email);
})

