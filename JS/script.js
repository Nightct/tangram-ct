var tangram = document.querySelector(".tangram");

var bouton = document.querySelector(".button--square");
bouton.addEventListener("click", function() {
    tangram.setAttribute("class", "tangram tangram--square");
});

var bouton = document.querySelector(".button--bateau");
bouton.addEventListener("click", function() {
    tangram.setAttribute("class", "tangram tangram--bateau");
});

var bouton = document.querySelector(".button--fusee");
bouton.addEventListener("click", function() {
    tangram.setAttribute("class", "tangram tangram--fusee");
});

var bouton = document.querySelector(".button--marteau");
bouton.addEventListener("click", function() {
    tangram.setAttribute("class", "tangram tangram--marteau");
});
