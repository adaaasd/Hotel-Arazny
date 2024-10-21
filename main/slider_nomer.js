$(document).ready(function(){

    $('.slider-2').slick({
        dots: true, /* Отображение навигационных точек */
        infinite: true, /* Бесконечный цикл слайдов */
        speed: 300, /* Скорость анимации */
        slidesToShow: 1, /* Показывать по 1 слайду */
        slidesToScroll: 1, /* Прокручивать по 1 слайду */
        adaptiveHeight: true, /* Адаптивная высота слайдера */
        arrows : false,
        responsive: [
            {
                breakpoint: 768, /* Применить на устройствах шириной до 768 пикселей */
                settings: {
                    slidesToShow: 1, /* Показывать по 1 слайду */
                    slidesToScroll: 1 /* Прокручивать по 1 слайду */
                }
            }
        ]
    });
});