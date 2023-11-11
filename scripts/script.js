const navPanel = document.querySelector('.nav-list')
document.querySelector('#hamburger-menu').onclick = () => {
    navPanel.classList.toggle('clicked');
}