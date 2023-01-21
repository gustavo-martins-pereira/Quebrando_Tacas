(function() {
    {
        const $inputFile = document.querySelector("[data-element-id='fileInput']");
        const $inputFileLabel = document.querySelector("[data-element-id='inputFileLabel']");

        $inputFile.addEventListener("change", () => {
            if($inputFile.files) {
                $inputFileLabel.classList.add("contact__fields__proof-field__input--file-selected");
                $inputFileLabel.textContent = "Comprovante Anexado";
            }
        });
    }
}());