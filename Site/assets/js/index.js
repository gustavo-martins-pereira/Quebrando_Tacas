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
            "choral",
            "children-musicalization",
            "presentations",
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

    /* CONTACT FORM SUBMIT *
     * 
     * GOAL:
     * Send a E-mail with the values of the field on the form and show a pop-up message to the use
     * 
     * STRATEGY:
     * Make a fetch with a POST method and show a pop-up message based in the returned response promisse
     */
    {
        let $contactForm = document.querySelector("[data-element-id='contact-form']");
        $contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            let $nameInput = document.querySelector("[data-element-id='contactNameInput']");
            let $emailInput = document.querySelector("[data-element-id='contactEmailInput']");
            let $messageInput = document.querySelector("[data-element-id='contactMessageInput']");

            fetch("https://formsubmit.co/ajax/claushmartins@gmail.com", {
                method: "POST",
                
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                body: JSON.stringify({
                    "Nome": $nameInput.value,
                    "E-mail": $emailInput.value,
                    "Menssagem": $messageInput.value
                })
            })
                .then(response => {
                    if(response.ok) {

                    }
                })
                .catch(error => console.log(error));
        });
    }
})();