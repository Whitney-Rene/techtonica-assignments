document.getElementById("submit").addEventListener("click", (event) =>{
    event.preventDefault();

    //Grabs the inputs
    const username = document.getElementById("fnameinput").value;
    const email = document.getElementById("email").value;

    //console.log
    console.log(username);
    console.log(email);
})

