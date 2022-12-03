(function() {
    /* DROP DOWN THE CONTENT BOX *
     * TODO: Refactor the documentation
     * GOAL:
     * Drop down a content's box when there is clicked
     * 
     * STRATEGY:
     * Get the elements with "data-dropdown-trigger" attribute and get the brothers with a "data-dropdown-content" attribute and show it
    */
    {
        let $dropdownTriggers = document.querySelectorAll("[data-dropdown-trigger]");

        $dropdownTriggers.forEach(dropdownTrigger => {
            dropdownTrigger.addEventListener("click", () => {
                let parentNode = dropdownTrigger.parentElement;

                for (let child of parentNode.children) {                    
                    if(child.hasAttribute("data-dropdown-content")) {
                        parentNode.classList.toggle("active");
                    }
                }
            });
        });
    }
})();