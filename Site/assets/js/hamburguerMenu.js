(function() {
    /* OPENING AND CLOSING MENU *
     * 
     * GOAL:
     * Close and Open the Menu if the Hamburguer menu is clicked
     * 
     * STRATEGY:
     * Add or Remove the class "menu-is-active" to apply the CSS styles
     */
    {
        const $menu = document.querySelector("[data-element-id='menu']");
        const $menuHamburguerButton = document.querySelector("[data-element-id='menuHamburguerIcon']");

        $menuHamburguerButton.addEventListener("click", function() {
            $menu.classList.toggle("menu-is-active");
        });

        // Fix the bug when screen changes size with icon open or closed
        document.body.onresize = function() {
            const clientWindowTarget = 1024;
            if(document.body.clientWidth >= clientWindowTarget - 17) {
                $menu.classList.remove("menu-is-active");
            }
        }
    }
})();