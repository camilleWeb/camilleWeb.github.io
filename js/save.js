
// CODE ANIMATION D'INTRO QUI FONCTIONNE AVANT DE TESTER DE PASSER L'ANIMATION AU SCROLL 



<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js"></script>




let introUp = gsap.timeline();
introUp.to(".intro-up", {
    duration:5,
    y:-innerHeight,
    delay:1.5
});
let introDown = gsap.timeline();
introDown.to(".intro-down", {
    duration:5,
    y:innerHeight,
    delay:1.5
});




let spanIntroDelay = 1800;

setTimeout(spanSlide, spanIntroDelay);

function spanSlide(){

    let addClass = [
        "slide-left",
        "slide-down",
        "slide-right",
        "slide-up",
        "slide-left",
        "slide-down",
        "slide-right",
        "slide-up",
        "slide-left"
    ];

    let spanIntro = document.querySelectorAll('.intro-span');

    spanIntro = Array.prototype.slice.call(spanIntro);


    function addClassName(spanIntro, addClass) {
        spanIntro.forEach((el, index) => {
            el.classList.add(addClass[index]);
    });
}

addClassName(spanIntro, addClass);
console.log(spanIntro);
console.log(addClass);

    for(var i=0; i<spanIntro.length; i++){
        let spanMouve = spanIntro[i];
        console.log(spanMouve);
        spanMouve.classList.replace('intro-span',addClassName(spanIntro, addClass));
    }
}

