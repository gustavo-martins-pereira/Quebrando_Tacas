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
        const coursesLink = [
            "sing",
            "choral",
            "children-musicalization",
            "presentations",
        ];

        const $carouselBullets = document.querySelector("[data-element-id='swiper-paginator']");
     
        const $accessCourseButton = document.querySelector("[data-element-id='acess-course-button']");
        const mutationObserver = new MutationObserver(() => {
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
        const $contactForm = document.querySelector("[data-element-id='contact-form']");
        $contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Inputs
            const $nameInput = document.querySelector("[data-element-id='contactNameInput']");
            const $emailInput = document.querySelector("[data-element-id='contactEmailInput']");
            const $messageInput = document.querySelector("[data-element-id='contactMessageInput']");

            // keilagruviracerqueira9602@gmail.com
            // claushmartins@gmail.com
            fetch("https://formsubmit.co/ajax/claushmartins@gmail.com", {
                method: "POST",
                
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

                body: JSON.stringify({
                    "Nome": $nameInput.value,
                    "E-mail": $emailInput.value,
                    "Mensagem": $messageInput.value,

                    /* FORMSUBMIT CONFIGURATION */
                    "_subject": "TITULO DO EMAIL",
                    "_template": "table"
                })
            })
                // FIXME: Wait the element to be appended in the div first to apply the transition when the element is showing
                .then(response => response.ok ? createSuccessPopUp(true) : createSuccessPopUp(false))
                .then(popUp => {
                    const pops = document.querySelector("[data-element-id='contact-pop-ups']");
                    pops.appendChild(popUp);

                    return popUp;
                })
                .then(popUp => {
                    popUp.classList.replace("contact__pop-ups__pop-up--invisible", "contact__pop-ups__pop-up--visible");

                    return popUp;
                })
                .then(popUp => deletePopUp(popUp))
                .catch((error) => console.log(error));
        });

        // Create a Success Pop-Up or a Fail Pop-Up based in the argumment, and return the HTML element already done
        function createSuccessPopUp(isSuccess) {
            const popUp = document.createElement("div");
            popUp.classList.add("contact__pop-ups__pop-up", "contact__pop-ups__pop-up--invisible");
            
            if(isSuccess) {
                popUp.classList.add("contact__pop-ups__pop-up--success");
                
                popUp.innerHTML = `
                    <img src="assets/images/icons/Correct.svg" alt="">
                    <p>E-mail enviado com sucesso!</p>
                `;
            } else {
                popUp.classList.add("contact__pop-ups__pop-up--fail");

                popUp.innerHTML = `
                    <img src="assets/images/icons/Incorrect.svg" alt="">
                    <p>Ocorreu um erro ao enviar o E-mail</p>
                `;
            }

            return popUp;
        }

        function deletePopUp(popUp) {
            setTimeout(function() {
                popUp.classList.replace("contact__pop-ups__pop-up--visible", "contact__pop-ups__pop-up--invisible");
            }, 3000);

            setTimeout(function() {
                popUp.remove();
            }, 4000);
        }
    }
})();