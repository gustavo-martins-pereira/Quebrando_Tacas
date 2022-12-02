(function() {
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
        let coursesLink = [
            "sing",
            "keyboard",
            "piano",
            "children-musicalization",
            "choral-conductor"
        ];

        let $carouselBullets = document.querySelector(".swiper-pagination");
     
        let $accessCourseButton = document.querySelector(".courses__acess-course");
        let mutationObserver = new MutationObserver(() => {
            $carouselBullets.childNodes.forEach((bullet, index) => {
                if(bullet.classList.contains("swiper-pagination-bullet-active")) {
                    // Set the "href" of the "<a></a>" tag according the index of the "coursesLink"
                    $accessCourseButton.href = `./pages/${coursesLink[index]}-course.html`;
                }
            });
        });
        
        mutationObserver.observe($carouselBullets, {
            attributeFilter: ["class"],
            subtree: true
        });
    }
})();