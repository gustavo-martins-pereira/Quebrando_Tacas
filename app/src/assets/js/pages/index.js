import { } from "../main.js";

(function() {
    /* ACCESS COURSE BUTTON *
     * 
     * GOAL:
     * Change the "src" attribute value according the active slide of the pages
     * 
     * STRATEGY:
     * Get the Bullets Pagination, and get the bullet with class "swiper-pagination-bullet-active", and according the index, set the "href" of the link with the value of the array of courses
     * To do this, the MutationObserver is used to listening the changes in the "swiper-pagination" element
     */
    {
        const coursesLink = [
            "courses/sing-course",
            "courses/choral-course",
            "courses/children-musicalization-course",
            "who-i-am",
        ];

        const $carouselBullets = document.querySelector("[data-element-id='swiper-paginator']");
     
        const $accessCourseButton = document.querySelector("[data-element-id='acess-course-button']");
        const mutationObserver = new MutationObserver(() => {
            $carouselBullets.childNodes.forEach((bullet, index) => {
                if(bullet.classList.contains("swiper-pagination-bullet-active")) {
                    $accessCourseButton.href = `${coursesLink[index]}.html`;
                }
            });
        });
        
        mutationObserver.observe($carouselBullets, {
            attributeFilter: ["class"],
            subtree: true
        });
    }

    // SWIPER CONFIGURATIONS
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    /* CONTACT FORM SUBMIT *
     * 
     * GOAL:
     * Send a E-mail with the values of the field on the form and show a pop-up message to the use
     * 
     * STRATEGY:
     * Make a fetch with a POST method and show a pop-up message based in the returned response promisse
     */
    {
        const $contactForm = document.querySelector("[data-element-id='basic-contact-form']");
        $contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const $sendButton = document.querySelector("[data-element-id='basic-contact-form__sendButton']");
            $sendButton.classList.add("basic-contact__send-button--disabled");
            $sendButton.setAttribute("disabled", true);

            // Inputs
            const $nameInput = document.querySelector("[data-element-id='basic-contactNameInput']");
            const $emailInput = document.querySelector("[data-element-id='basic-contactEmailInput']");
            const $messageInput = document.querySelector("[data-element-id='basic-contactMessageInput']");

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
                .then(response => {
                    const $popUp = response.ok ? createSuccessPopUp(true) : createSuccessPopUp(false);

                    const $popups = document.querySelector("[data-element-id='basic-contact-pop-ups']");
                    $popups.appendChild($popUp);
                    
                    $sendButton.classList.remove("basic-contact__send-button--disabled");
                    $sendButton.removeAttribute("disabled");

                    $popUp.classList.replace("basic-contact__pop-ups__pop-up--invisible", "basic-contact__pop-ups__pop-up--visible");

                    deletePopUp($popUp);
                })
                .catch((error) => console.log(error));
        });

        function createSuccessPopUp(isSuccess) {
            const popUp = document.createElement("div");
            popUp.classList.add("basic-contact__pop-ups__pop-up");
            
            if(isSuccess) {
                popUp.classList.add("basic-contact__pop-ups__pop-up--success", "basic-contact__pop-ups__pop-up--invisible");
                
                popUp.innerHTML = `
                    <img src="assets/images/icons/Correct.svg" alt="">
                    <p>E-mail enviado com sucesso!</p>
                `;
            } else {
                popUp.classList.add("basic-contact__pop-ups__pop-up--fail");

                popUp.innerHTML = `
                    <img src="assets/images/icons/Incorrect.svg" alt="">
                    <p>Ocorreu um erro ao enviar o E-mail</p>
                `;
            }

            return popUp;
        }

        function deletePopUp(popUp) {
            setTimeout(function() {
                popUp.classList.replace("basic-contact__pop-ups__pop-up--visible", "basic-contact__pop-ups__pop-up--invisible");
            }, 3000);

            setTimeout(function() {
                popUp.remove();
            }, 4000);
        }
    }
})();