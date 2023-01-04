(function() {
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