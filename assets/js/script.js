const $classesCourseItens = document.querySelectorAll("[data-element-id='classes-course__item']");
$classesCourseItens.forEach($classesCourseItem => {
    $classesCourseItem.addEventListener("click", () => {
        $classesCourseItem.classList.toggle("classes-course__item--active");
    });
});