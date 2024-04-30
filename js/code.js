const togglMenu = document.querySelector('.menu-burger');
const nav = document.querySelector('nav.menu');

togglMenu.addEventListener('click',()=>{
    nav.classList.toggle('show');
})


