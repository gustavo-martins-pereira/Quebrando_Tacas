// GLOBAL VARIABLES
// Opening and Closing Menu
let menuIsActive = false;

// Access Course Button
let coursesLink = [
    "Canto",
    "Teclado",
    "Piano",
    "Musicalização Infantil",
    "Regente Coral"
];

(function() {
    // Opening and Closing Menu
    let $menuHamburguerButton = document.querySelector(".menu__hamburguer-icon");
    $menuHamburguerButton.addEventListener("click", function() {
        menuIsActive = !menuIsActive;

        let $menu = document.querySelector(".menu");
        let $navigationMenu = document.querySelector(".navigation-menu");
        if(menuIsActive) {
            $menu.style.backgroundColor = "var(--menu-background)";
            $menu.style.boxShadow = "-2px 2px 4px rgba(0, 0, 0, .5)";
            
            $menuHamburguerButton.src = "assets/images/icons/Close.svg";
            
            $navigationMenu.style.height = "auto";
        } else {
            $menu.style.backgroundColor = "transparent";
            $menu.style.boxShadow = "none";
            
            $menuHamburguerButton.src = "assets/images/icons/Menu.svg";

            $navigationMenu.style.height = 0;
        }
    });

    // Access Course Button
    let $carouselBullets = document.querySelectorAll(".swiper-pagination-bullet");

    let $accessCourseButton = document.querySelector(".courses__acess-course");

    
})();