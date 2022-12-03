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

        let $menu = document.querySelector("[data-element-id='menu']");
        let $navigationMenu = document.querySelector("[data-element-id='navigationMenu']");
        let $menuHamburguerButton = document.querySelector("[data-element-id='menuHamburguerIcon']");
        
        let assetsPath = $menuHamburguerButton.dataset.assetsPath;
        
        $menuHamburguerButton.addEventListener("click", function() {
            menuIsActive = !menuIsActive;

            // Change the CSS according the "menuIsActive"
            if(menuIsActive) {
                // TODO: Change the color to a variable name
                $menu.style.backgroundColor = "hsl(202, 100%, 71%)";
                $menu.style.boxShadow = "-2px 2px 4px hsla(0, 0%, 0%, 0.8)";
                
                $menuHamburguerButton.src = `${assetsPath}/images/icons/Close.svg`;
                
                $navigationMenu.style.height = "auto";
            } else {
                $menu.style.backgroundColor = "transparent";
                $menu.style.boxShadow = "none";
                
                $menuHamburguerButton.src = `${assetsPath}/images/icons/Menu.svg`;

                $navigationMenu.style.height = 0;
            }
        });

        // Fix the bug when screen changes size with icon open or closed
        document.body.onresize = function() {
            let clientWindowTarget = 1024;
            if(document.body.clientWidth >= clientWindowTarget - 17) {
                $menu.removeAttribute("style");
                $menuHamburguerButton.src = `${assetsPath}/images/icons/Menu.svg`;
                $navigationMenu.removeAttribute("style");

                menuIsActive = false;
            }
        }
    }
})();