const menu=document.querySelector('.menu')
const menuList=document.querySelector('nav ul')
const body=document.querySelector('body')

menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})

