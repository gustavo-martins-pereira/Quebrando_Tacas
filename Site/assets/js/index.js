(function() {
    /* OPENING AND CLOSING MENU *
     * 
     * GOAL:
     * Close and Open the Menu if the Hamburguer menu is clicked
     * 
     * STRATEGY:
     * Use a boolean variable to check if the menu is active and customize the element's CSS according to the boolean
     */
    {
        let menuIsActive = false;

        let $menuHamburguerButton = document.querySelector(".menu__hamburguer-icon");
        $menuHamburguerButton.addEventListener("click", function() {
            menuIsActive = !menuIsActive;

            let $menu = document.querySelector(".menu");
            let $navigationMenu = document.querySelector(".navigation-menu");
            // Change the CSS according the "menuIsActive"
            if(menuIsActive) {
                $menu.style.backgroundColor = "hsl(202, 100%, 71%)";
                $menu.style.boxShadow = "-2px 2px 4px hsla(0, 0%, 0%, 0.8)";
                
                $menuHamburguerButton.src = "assets/images/icons/Close.svg";
                
                $navigationMenu.style.height = "auto";
            } else {
                $menu.style.backgroundColor = "transparent";
                $menu.style.boxShadow = "none";
                
                $menuHamburguerButton.src = "assets/images/icons/Menu.svg";

                $navigationMenu.style.height = 0;
            }
        });

        // Fix the bug when screen changes size with icon open or closed
        document.body.onresize = function() {
            let $menu = document.querySelector(".menu");
            let $navigationMenu = document.querySelector(".navigation-menu");

            let clientWindowTarget = 1024;
            if(document.body.clientWidth >= clientWindowTarget - 17) {
                $menu.removeAttribute("style");
                $menuHamburguerButton.src = "assets/images/icons/Menu.svg";
                $navigationMenu.removeAttribute("style");

                menuIsActive = false;
            }
        }
    }

    /* ACCESS COURSE BUTTON *
     * 
     * GOAL:
     * Change the "src" attribute value according the active slide of the courses
     * 
     * STRATEGY:
     * Get the Bullets Pagination, and get the bullet with class "swiper-pagination-bullet-active", and according the index, set the "href" of the link with the value of the array of courses
     * To do this, the MutationObserver is used to listening the changes in the "swiper-pagination" element
     */
    {
        //TODO: Add the URL courses
        let coursesLink = [
            "Canto",
            "Teclado",
            "Piano",
            "Musicalização Infantil",
            "Regente Coral"
        ];

        let $carouselBullets = document.querySelector(".swiper-pagination");
     
        let $accessCourseButton = document.querySelector(".courses__acess-course");
        let mutationObserver = new MutationObserver(() => {
            $carouselBullets.childNodes.forEach((bullet, index) => {
                if(bullet.classList.contains("swiper-pagination-bullet-active")) {
                    // Set the "href" of the "<a></a>" tag according the index of the "coursesLink"
                    $accessCourseButton.href = coursesLink[index];
                }
            });
        });
        
        mutationObserver.observe($carouselBullets, {
            attributeFilter: ["class"],
            subtree: true
        });
    }
})();