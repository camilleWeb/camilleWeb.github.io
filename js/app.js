gsap.registerPlugin(ScrollTrigger);
// *********** LOAD PAGE ANIM ****************

// let intro = gsap.timeline({delay:1});
// intro.to(".intro-up", {duration:8, y:-innerHeight})
// .to(".intro-down", {duration:8,y:innerHeight}, "-= 8");
 
// let time1 = gsap.timeline({delay:3});
// time1.to(".container-intro-titre",{
//     duration:3,
//     x:-295,
//     y:20
// });
// time1.to(".container-intro-titre",{
//     opacity:0
// });
// time1.to(".miniLogo", {
//     opacity:1
// })
// .to(".load-page", {
//     backgroundColor:"transparent",
//     y:-innerHeight,
// }, "-=.5")
// ;

// ScrollTrigger.create({
//     animation:intro,
//     markers:true,
//     start:"center center",
//     end:"bottom center",
//     scrub:4
// });




let spanIntroDelay = 800;

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
            el.classList.add(addClass[index],"pong");
            
    });
}

addClassName(spanIntro, addClass);


    for(var i=0; i<spanIntro.length; i++){

        let spanMouve = spanIntro[i];
        spanMouve.classList.replace('intro-span',addClassName(spanIntro, addClass));
    }
}
let ping = document.getElementById("superGreen").childNodes;
console.log(ping);
ping = Array.prototype.slice.call(ping);

for (i=0; i<ping.length; i++){
    let hope = ping[i];
    hope.addEventListener('mouseover',() => {
        hope.classList.add('activeRebond');
        setTimeout(function(){
            hope.classList.remove('activeRebond');
        },1000);
    } )
}

//  ************* LETTRE REBOND ANIMATION **************** 

let lettres = document.querySelectorAll(".pong");
lettres = Array.prototype.slice.call(lettres);

for (i=0; i<lettres.length; i++){
    let hope = lettres[i];
    hope.addEventListener('mouseover',() => {
        hope.classList.add('activeRebond');
        setTimeout(function(){
            hope.classList.remove('activeRebond');
        },1000);
    } )
}

// *********** ASTRO ANIMATION ***********
let astroTween = gsap.to(".astro", {
    duration:120 ,
    x:100,
    y:1000,
    yoyo: true,
    repeat:-1,
});

// //************* ROCKET ANIMATION *************

// // *** SMOKE ANIM *** 

//     let tl = gsap.timeline({repeat:-1});
//     tl.to(".cloud:nth-child(0n+6)", {keyframes: [
//         {y:95, x:10, scale:2},
//         {y:230, scale:.8, opacity:0}
//     ]})
//     .to(".cloud:nth-child(0n+4)", { keyframes: [
//         {y:95, x:-10, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+3)", {keyframes: [
//         {y:95,x:10, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+5)", { keyframes: [
//         {y:95,x:-10, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+2)", { keyframes: [
//         {y:95,x:15, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+1)", {keyframes: [
//         {y:95,x:-15, scale:2},
//         {y:230, scale:.8, opacity:0}
//     ]}, "-=90%");
    
//     let tl2 = gsap.timeline({repeat:-1});
//     tl2.to(".cloud:nth-child(0n+11)", {keyframes: [
//         {y:95,x:10, scale:2},
//         {y:230, scale:.8, opacity:0}
//     ]})
//     .to(".cloud:nth-child(0n+10)", { keyframes: [
//         {y:95,x:-10, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+9)", {keyframes: [
//         {y:95,x:10, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+12)", { keyframes: [
//         {y:95,x:-10, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+7)", { keyframes: [
//         {y:95,x:15, scale:2},
//         {y:230,  scale:.8, opacity:0}
//     ]}, "-=90%")
//     .to(".cloud:nth-child(0n+8)", {keyframes: [
//         {y:95,x:-10, scale:2},
//         {y:230, scale:.8, opacity:0}
//     ]}, "-=90%")
//     ;

//     // PARAMETRE SMOKE ANIM 
//     tl.totalDuration(.9);
//     tl2.totalDuration(.9);
//     tl2.delay(.7);
//     tl.paused(true);
//     tl2.paused(true);

//     // SMOKE ON OVER FUNCTION 
//     function smokeRocket(){
//         tl.paused(false);
//         tl2.paused(false);
//     };
//     function unSmokeRocket(){
//         tl.paused(true);
//         tl2.paused(true);
//     }
//     let rock = document.querySelector(".full-rocket");
//     rock.addEventListener('mouseover',smokeRocket);
//     rock.addEventListener('mouseleave',unSmokeRocket);


// var controller = new ScrollMagic.Controller();

//  let rocketIntro = gsap.timeline();
//     rocketIntro.to(".full-rocket", {
//         duration:2,
//         motionPath:{
//         path:[
//             {x:1700, y:500},
//             ],
//         curviness:0,
//         autoRotate:false,
// }});

// var scene = new ScrollMagic.Scene({
//     triggerElement:'.bio', 
//     offset:-900})
// .triggerHook(0)
// .setTween(rocketIntro)
// .addIndicators()
// .addTo(controller);


/*************** DESK MUG SMOKE *******************/

// let mugSmoke = gsap.timeline({repeat:-1, duration:0, repeatDelay:0 });
// mugSmoke.to("#white1", {
//     y:-55,
//     x:-20,
//     width:50,
//     scale:1.2
// })
// .to("#white2",
// {
//     y:-55,
//     x:10,
//     width:50,
//     scale:1.2
// }, "-=85%")
// .to("#white3",
// {
//     y:-55,
//     x:-5,
//     width:50,
//     scale:1.2
// }, "-=85%")
// .to("#white4",
// {
//     y:-55,
//     x:5,
//     width:50,
//     scale:1.2
// }, "-=85%")
// .to("#white5",
// {
//     y:-55,
//     x:0,
//     width:50,
//     scale:1.2
// }, "-=85%")
// .to("#white6",
// {
//     y:-55,
//     x:0,
//     width:50,
//     scale:1.2
// }, "-=85%")
// .to("#white7",
// {
//     y:-55,
//     x:0,
//     width:50,
//     scale:1.2
// }, "-=85%")
// ;