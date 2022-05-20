const hamburgerBtn = document.querySelector('#hamburger');
const menu = document.querySelector('.navbar__menu')
const icons = document.querySelector('.navbar__icons')

hamburgerBtn.addEventListener('click', ()=>{
  menu.classList.toggle('display');
  icons.classList.toggle('display');
});