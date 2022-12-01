(function() {
    /* DROP DOWN THE CONTENT BOX *
     * 
     * GOAL:
     * Drop down a content's box when there is clicked
     * 
     * STRATEGY:
     * Set a boolean value for each section and change the value on every user click
    */
    {
        let $sectionHeaders = document.querySelectorAll("[data-element-id='sectionHeader']");
        $sectionHeaders.forEach(sectionHeader => {
            let sectionActive = false;

            sectionHeader.addEventListener("click", () => {
                sectionActive = !sectionActive;

                if(sectionActive) {
                    sectionHeader.children[1].style.transform = "rotateZ(180deg)";
                    
                    sectionHeader.nextElementSibling.style.height = "auto";
                    sectionHeader.nextElementSibling.style.padding = "0.75rem";
                } else {
                    // FIXME: Fix the height to a fixed value to allow the transition
                    sectionHeader.children[1].style.transform = "rotateZ(0deg)";
                    
                    sectionHeader.nextElementSibling.style.height = "0";
                    sectionHeader.nextElementSibling.style.padding = 0;
                }
            });
        });
    }
})();