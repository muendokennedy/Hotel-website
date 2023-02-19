// This is a script to toggle the menu
const navigationMenu = document.querySelector("header nav");
const menuIcon = document.querySelector("header .menu i");

menuIcon.onclick = () => {
    if(menuIcon.classList.contains("fa-bars")){
        menuIcon.classList.replace("fa-bars", "fa-xmark");
        navigationMenu.classList.add("active");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
        navigationMenu.classList.remove("active");
    }
}