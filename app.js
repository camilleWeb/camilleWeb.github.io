const list = document.getElementById('list');
const item = document.getElementById('item');
const form = document.querySelector('form')

// add element 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    storage();
    item.value = '';
});


// remove element 
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('checked')){
        e.target.remove();
    } else {
        e.target.classList.add('checked');
    }
    storage();
})

function storage() {
    window.localStorage.todoList = list.innerHTML;
}
function getValues(){
    let storageContent = window.localStorage.todoList;
    if(!storageContent) {
        list.innerHTML = 
        '<li>Hello !For add new thing use A Faire. For check click on me! For remove click on trash !</li>';
    } else {
        list.innerHTML = storageContent;
    }
}
getValues();