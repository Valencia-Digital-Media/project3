// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// get the body
var body = document.querySelector("body");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    // Prevents the background from Scrolling
    body.className += ' modal-overflow';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    // Removes Overflow class
    body.className -= ' modal-overflow';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Removes Overflow class
        body.className -= ' modal-overflow';
    }
} 

document.querySelector(".register-page").style.visibility = "hidden";

function registerFunction() {
    document.querySelector(".login-page").style.visibility = "hidden";
    document.querySelector(".register-page").style.visibility = "visible";
}

function registerThanks () {
    alert("Account created! Thanks for registering.");
        modal.style.display = "none";
         // Removes Overflow class
        body.className -= ' modal-overflow';
        document.querySelector(".register-page").style.visibility = "hidden";
        document.querySelector(".login-page").style.visibility = "visible";
    
}