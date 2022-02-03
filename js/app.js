gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

//  *** BIENVENUE ANIMATION *** \\

let redLogoTl = gsap.timeline();
redLogoTl.to('.logored', {
    delay:.5,
    duration:3,
    opacity:1,
    rotate:360
});

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

// let bvDown = gsap.to('#superGreen', {
//     duration:5,
//     y:700,
//     delay:2.7
// });
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

// ************* CASTLE ANIM *************
let movingCastle = gsap.to(".castle", {
    duration:35,
    x:-420,
    ease: "none",
    repeat:-1
});

//************** PAPER TRASH *************
let pep = gsap.timeline();
pep.to(".paper3", {
 
    duration:2,
    motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5]
    }
});

pep.pause();

let pp = document.getElementById("ppball");


pp.addEventListener('click', () => {

    let ma = 2;
    let flo = Math.floor(Math.random() * ma);

        if(flo == 0){

            let pa = document.getElementById("path1");
            pa.getAttribute('d');
            da = pa.getAttribute('d');
            gsap.to('.mi-co', {
                delay:1.3,
                duration:0.1,
                y:-80,
                x:-15
            });
            pep.play();
            setTimeout(function(){
                pep.pause(1.40);
            }, 1400);


        } else if(flo == 1){

            let pa = document.getElementById("path1");
            pa.setAttribute("d", "m173,404c38,-225 52,-253 88,-293c36,-40 91,-95 171,-82c80,13 230,52 269,102c39,50 134,176 145,222c11,46 31,214 31,214");
            pep.play();
        } 
});


//****************  SCROLL NAV ********************* */

let lastScroll = 0;
let navBar = document.querySelector('nav');
let scrollArow = document.querySelector('.scroll-logo');

window.addEventListener('scroll', () => {
    
    let scro = window.pageYOffset;
    
    if(scro > lastScroll){
        console.log("down");
        navBar.style.top = "-10vh";

    } else {
        console.log("up");
        navBar.style.top = "0";

    }
    lastScroll = scro <= 0 ? 0 : scro;
}, false);

function scr(){
    scrollArow.style.left = "10px";

    if(window.addEventListener('scroll', () => {
        let scro = window.pageYOffset;
        if(scro > lastScroll){

            scrollArow.style.left = "-160px";

        } else {

            scrollArow.style.left = "0";
        }
        lastScroll = scro <= 0 ? 0 : scro;
    }, false));
};






// let pp = document.querySelector('.paper3');
// pp.addEventListener('click', trashAnim);
// function trashAnim(){
//     console.log("start");
//     let ma = 3;
//     let flo = Math.floor(Math.random() * ma);
//         if(flo == 0){
//             console.log(flo);
//             trash1();
//         } else if(flo == 1){
//             console.log(flo);
//             trash2();
//         } else if(flo == 2){
//             console.log(flo);
//             trash3();
//         }
// };
// function trash1(){
//     pp.classList.add('clickpaper1');
// }
// function trash2(){
//     pp.classList.add('clickpaper2');
// }
// function trash3(){
//     pp.classList.add('clickpaper3');
// }
// let tr = gsap.timeline();
// gsap.to("#path1", {xPercent:-50, yPercent:-50});
// tr.to(".paper3", {
//     duration:5,
//     motionPath: {
//         path:"#path1"
//     }
// });
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