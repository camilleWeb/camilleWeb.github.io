gsap.registerPlugin(ScrollToPlugin, EasePack, ScrollTrigger, CSSRulePlugin, EaselPlugin, MotionPathPlugin);

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

// ********************* GSAP ANIM Intro **********************

// Texte intro 

var tl = gsap.timeline();
tl.to(".title-Wel", {x:-1380, duration:1})
.to(".pa1", {x:-1580, duration:1},"-=0.5")
.to(".pa2", {x:-1180, duration:1},"-=0.5");

/* ******************* Scroll Rocket Animation ***************** */
var road = [
    {x:0 , y: 0},
    {x: 50, y: -50},
    {x: 100, y: -100},
    {x:500,y:-100},
 /*    {x:100,y:100},
    {x:200,y:250},
    {x:500,y:350}, */
];

gsap.to('#marion', {
    scrollTriger: {
        trigger:"#marion",
        markers: true,

    },
    motionPath: {
        path: road,
        curviness:1,
        autoRotate: true
    },
    duration: 2,
    ease: Power1.easeOut,
});





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