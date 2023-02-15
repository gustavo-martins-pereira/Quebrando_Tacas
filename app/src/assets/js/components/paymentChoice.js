(function() {
    {
        const $radioButtons = document.querySelectorAll("[data-element-id='payment__material-choice']");
        const $qrCodePaymentLink = document.querySelector("[data-element-id='qr-code-link']");

        $radioButtons.forEach($radioButton => {
            $radioButton.addEventListener("click", () => {
                $qrCodePaymentLink.href = $radioButton.dataset.materialChoiceUrl;
            });
        });
    }
})();