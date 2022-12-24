(function() {
    /* DROP DOWN THE CONTENT BOX *
     *
     * GOAL:
     * Drop down a content's box when there is clicked
     * 
     * STRATEGY:
     * Get the elements with "data-dropdown-trigger" attribute in the page and get the elements inside this parent with a "data-dropdown-content" attribute and put a class called "active"
     * The functionality performs a recursive function going through the children and checking which ones contain the indicated attribute
     * 
     * COMMENTS:
     * Define the style of the "active" class on the parent element of the element that contains the "data-dropdown-trigger" attribute
    */
    {
        let $dropdownTriggers = document.querySelectorAll("[data-dropdown-trigger]");

        $dropdownTriggers.forEach(dropdownTrigger => {
            dropdownTrigger.addEventListener("click", () => {
                let parentNode = dropdownTrigger.parentElement;

                activeDropdownContent(parentNode, parentNode.children);
            });
        });

        function activeDropdownContent(mainParentNode, children) {
            for (const child of children) {
                let hasDataDropdownContent = child.hasAttribute("data-dropdown-content");

                if(child.children && !hasDataDropdownContent) {
                    activeDropdownContent(mainParentNode, child.children);
                } else {
                    if(hasDataDropdownContent) {
                        child.classList.toggle("learning__sections__section__content--transition");

                        mainParentNode.classList.toggle("active");
                    }
                }
            }
        }
    }

    /* DROP DOWN THE CONTENT BOX *
     *
     * GOAL:
     * Drop down a content's box when there is clicked
     * 
     * STRATEGY:
     * Toggle a class which set the max-height when the button is clicked
    */
    {
        let $loadOtherSectionsButton = document.querySelector("[data-element-id='loadOtherSectionsButton']");

        let allSectionsIsLoaded = false;
        $loadOtherSectionsButton.addEventListener("click", () => {
            let $sections = document.querySelector("[data-element-id='sections']");

            $sections.classList.toggle("learning__sections--max-height");

            allSectionsIsLoaded = !allSectionsIsLoaded;
            
            if(allSectionsIsLoaded) {
                $loadOtherSectionsButton.innerText = "Esconder as outras seções";
            } else {
                $loadOtherSectionsButton.innerText = "Carregar as Outras Seções";
            }
        });
    }
})();