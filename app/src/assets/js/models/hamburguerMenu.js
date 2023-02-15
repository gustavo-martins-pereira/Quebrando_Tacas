export class Menu {
    constructor($menu, $hamburguerMenuButton) {
        this.$menu = $menu;
        this.$menuHamburguerButton = $hamburguerMenuButton;

        this.toggleMenu();
        this.closeMenuWhenClickOutside();
        this.changeMenuWhenWindowShrinks();
    }

    toggleMenu() {
        this.$menuHamburguerButton.addEventListener("click", () => {
            this.$menu.classList.toggle("menu-is-active");
        });
    }

    closeMenuWhenClickOutside() {
        window.addEventListener("click", event => {
            if (!event.composedPath().includes(this.$menu)) {
                this.$menu.classList.remove("menu-is-active");
            }
        });
    }

    changeMenuWhenWindowShrinks() {
        // Fix the bug when screen changes size with icon open or closed
        document.body.onresize = () => {
            const clientWindowTarget = 1024;
            if (document.body.clientWidth >= clientWindowTarget - 17) {
                this.$menu.classList.remove("menu-is-active");
            }
        }
    }
}