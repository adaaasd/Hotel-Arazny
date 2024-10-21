$(document).ready(function(){
  
  $(".burger_btn").on("click", function() {
      $(".burger_btn").toggleClass("burger_icon_close");
      $(".nav_mobile").toggleClass("nav_mobile_active");
      $(".logo").toggleClass("logo_close");
      $("body").toggleClass("body_scroll");
  });

  $(".nav_mobile .nav_text_header").on("click", function() {
      $(".burger_btn").removeClass("burger_icon_close");
      $(".nav_mobile").removeClass("nav_mobile_active");
      $(".logo").removeClass("logo_close");
      $("body").removeClass("body_scroll");
  });
  $('.slick_slider').slick({
    infinite: true, // Бесконечное количество циклов
    slidesToShow: 1, // Количество слайдов, отображаемых одновременно
    slidesToScroll: 1, // Количество слайдов, прокручиваемых при клике
    arrows: false, // Отображать стрелки навигации
    dots: false, // Отображать точки навигации
    autoplay: true, // Автоматическое прокручивание
    autoplaySpeed: 7000, // Скорость автоматического прокручивания
  });


  $('.btn_href_6').click(function(event) {
    event.preventDefault();
    $('.text_rules_2').slideToggle();
    var $btn = $(this);
    $btn.text($btn.text() === 'Посмотреть правила' ? 'Свернуть' : 'Посмотреть правила');
  });


  $('.slider_gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: false,
    infinite: false, // Слайдер не будет бесконечным
    initialSlide: 0,  // Выравнивание первого слайда по центру
    arrows: false, 
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1.2,
              dots: false,
              centerMode: false,
              infinite: false,
              initialSlide: 0
          }
        }
    ]
  });

  $('.href_scroll').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top - 50
      }, 500);
  });
});
