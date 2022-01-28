const menuResponsiveIcon = document.querySelector('.header__nav-responsive')
const sideBar = document.querySelector('.sidebar')
const sidebarClose = document.querySelector('.sidebar-close')

menuResponsiveIcon.addEventListener('click', () => {
    sideBar.classList.toggle('active-flex')

})

sidebarClose.addEventListener('click', () => {
    sideBar.classList.toggle('active-flex')

})