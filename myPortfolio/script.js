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

// const photo = document.getElementsByClassName('containers');
// photo[0].style.opacity = "1";

// Get the first element with the class "containers"
const firstContainer = document.querySelector('.containers');

// Add a mouseover event listener to apply the sepia effect on hover
firstContainer.addEventListener('mouseover', () => {
  firstContainer.style.filter = 'sepia(100%)';
});

// Add a mouseout event listener to remove the sepia effect when the mouse leaves
firstContainer.addEventListener('mouseout', () => {
  firstContainer.style.filter = 'none'; // Reset the filter to remove the effect
});

