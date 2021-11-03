
const rightBarButton = document.querySelector('#btn-rightNav');
const removeRightBarButton = document.querySelector('#rigft-remove-btn');
const rightNavBar = document.querySelector('#right-nav');
const content = document.querySelector('.container');


rightBarButton.addEventListener('click',show);

function show() {
    rightNavBar.classList.add('active');
}
removeRightBarButton.addEventListener('click', removeBar);

function removeBar() {
    rightNavBar.classList.remove('active');
}


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