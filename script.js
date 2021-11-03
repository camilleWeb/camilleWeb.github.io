
const rightBarButton = document.querySelector('#btn-rightNav');
const removeRightBarButton = document.querySelector('#rigft-remove-btn');
const rightNavBar = document.querySelector('#right-nav');
const content = document.querySelector('.container');

//********************RIGHT NAV BAR ANIM ********************** */
rightBarButton.addEventListener('click',show);

function show() {
    rightNavBar.classList.add('active');
}
removeRightBarButton.addEventListener('click', removeBar);

function removeBar() {
    rightNavBar.classList.remove('active');
}

// ********************* GSAP ANIM **********************

// Texte intro 

var tl = gsap.timeline();
tl.to(".title-Wel", {x:-1380, duration:1})
.to(".pa1", {x:-1580, duration:1},"-=0.5")
.to(".pa2", {x:-1180, duration:1},"-=0.5");

// **************** SPACE PARALLAX ***************** //
document.addEventListener("mousemove",parallax);

function parallax(e) {
    document.querySelectorAll('img').forEach(function(move) {

        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX * movingValue) / 200;
        var y = (e.clientY * movingValue) /200;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}