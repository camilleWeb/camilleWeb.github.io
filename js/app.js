
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
