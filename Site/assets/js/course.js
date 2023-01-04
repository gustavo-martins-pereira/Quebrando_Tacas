(function() {
    /* SHOW QR CODE TO BUY A COURSE *
     * 
     * GOAL:
     * Appear a QR Code when the "Compre agora" Button is clicked
     * 
     * STRATEGY:
     * Remove the class which hidde the QR Code content
     */
    {
        const $buyCourseButton = document.querySelector("[data-element-id='buy-course-button']");

        $buyCourseButton.addEventListener("click", () => {
            const $buyCourseContent = document.querySelector("[data-element-id='buy-course-content']");

            $buyCourseContent.classList.remove("price__payment--hidden");
        });
    }
})();