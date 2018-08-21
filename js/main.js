// Triggers animation to non-bootstrap version of responsive menu
function burgerFlip(x) {
    x.classList.toggle("flipIt");
}

// Used for non-bootstrap version of resposive menu
function toogleBurgerMenu(x) {
    var x = document.getElementById("nonBootNavId");
    if (x.className === "topnav") {
        x.className += " responsive";
        burgerFlip(x);
    } else {
        x.className = "topnav";
    }
}