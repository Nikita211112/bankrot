$(function () {

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 700) {
      $('.call-back').addClass('call-back--active')
    } else {
      $('.call-back').removeClass('call-back--active')
    };
  });

  $('.wins__accordion-down').on('click', function () {
    $('.wins-item--accordion').slideDown();
    $(this).slideUp(80);
    $('.wins__accordion-up').slideDown();
  });

  $('.wins__accordion-up').on('click', function () {
    $('.wins-item--accordion').slideUp();
    $(this).slideUp();
    $('.wins__accordion-down').slideDown();
  });

  $('.offers__item-accord').on('click', function (){
    $(this).toggleClass('offers__item-accord--active').next().slideToggle();
  });

  $(".about__form-ipt").mask("+7 (999) 999-99-99");

  $('.popup-form__close').on('click', function (e) {
    e.preventDefault();
    $('.popup').removeClass('popup--active');
  });
  
  $('.header__top-call, .call-back').on('click', function (e) {
    e.preventDefault();
    $('.popup').addClass('popup--active');
  });




});
