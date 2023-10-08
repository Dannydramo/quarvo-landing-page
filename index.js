'use strict'
const openMenu = document.querySelector('.openmenu')
const closeMenu = document.querySelector('.closemenu')
const listItem = document.querySelector('.link_item')
const navItem = document.querySelector('nav')

document.addEventListener('scroll', () => {
    if (window.scrollY >= 75) {
        navItem.classList.add('navBar')

    } else {
        navItem.classList.remove('navBar')

    }
})

openMenu.addEventListener('click', () => {
    listItem.classList.add('link_item_show')
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    listItem.classList.remove('link_item_show')
    closeMenu.style.display = 'none'
})