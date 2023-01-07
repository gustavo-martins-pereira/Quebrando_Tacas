(function() {
    /* SHOW THE PAYMENT METHOD TO BUY A COURSE *
     * 
     * GOAL:
     * Appear a payment method when the "Compre agora" Button is clicked
     * 
     * STRATEGY:
     * Remove the class which hidde the payment method content
     */
    {
        // BUY COURSE BUTTON
        const $buyCourseButton = document.querySelector("[data-element-id='buy-course-button']");
        $buyCourseButton.addEventListener("click", () => {
            const $buyCourseContent = document.querySelector("[data-element-id='buy-course-content']");

            $buyCourseContent.classList.remove("price__payment--hidden");
        });

        // PAYMENT METHOD BUTTONS
        // QR Code
        const $paymentMethodQRCode = document.querySelector("[data-element-id^='payment-method-button--qr-code']");
        $paymentMethodQRCode.addEventListener("click", () => {
            $QRCodePayment.classList.remove("price__payment--hidden");

            $phonePayment.classList.add("price__payment--hidden");
            $tedPayment.classList.add("price__payment--hidden");
        });
        
        // PHONE NUMBER
        const $paymentMethodPhone = document.querySelector("[data-element-id^='payment-method-button--phone']");
        $paymentMethodPhone.addEventListener("click", () => {
            $phonePayment.classList.remove("price__payment--hidden");
    
            $QRCodePayment.classList.add("price__payment--hidden");
            $tedPayment.classList.add("price__payment--hidden");
        });
        
        // TED
        const $paymentMethodTed = document.querySelector("[data-element-id^='payment-method-button--ted']");
        $paymentMethodTed.addEventListener("click", () => {
            $tedPayment.classList.remove("price__payment--hidden");
    
            $QRCodePayment.classList.add("price__payment--hidden");
            $phonePayment.classList.add("price__payment--hidden");
        });

        const $QRCodePayment = document.querySelector("[data-element-id='payment-method-qr-code']");
        const $phonePayment = document.querySelector("[data-element-id='payment-method-phone']");
        const $tedPayment = document.querySelector("[data-element-id='payment-method-ted']");
    }
})();