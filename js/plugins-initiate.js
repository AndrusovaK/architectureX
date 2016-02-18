//Плавный скролл
$(function () {
  $('.main-nav a[href^="#"]').on('click',function(e){
      var target_position = $(this.hash).offset().top - 80;
      $('body,html').animate({'scrollTop':target_position},500);
  });
});


//Табы

$(document).ready(function(){

  $('.tabs a').on('click',function(e){
    e.preventDefault();
    $(this).closest('.tabs').find('.tabs__item').removeClass('tabs__item--active');
    $(this).closest('.tabs__item').addClass('tabs__item--active');

    var tabs_cnt_id = $(this).closest('.tabs').data('tabs-content-id');
    $(tabs_cnt_id).find('.tabs-content__item').removeClass('tabs-content__item--active');
    $(this.hash).addClass('tabs-content__item--active');
  });

});


//Карусель клиентов

$(document).ready(function () {
  $('.client-carousel').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.client-prev'),
  nextArrow: $('.client-next'),
  slidesToShow: 5,
  slidesToScroll: 1,

  });
});


//Карусель отзывов - инициализация

$(document).ready(function(){
    $('.reference-carousel').slick({
    prevArrow: $('.ref-prev'),
    nextArrow: $('.ref-next'),
    });
});


//isotope gallery

$(document).ready( function() {

  var $gallery = $('.gallery').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'packery'
  });

  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({ filter: filterValue });
  });

  $('.button-group').each(function (i, buttonGroup) {
     var $buttonGroup = $(buttonGroup);
     $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');

     });

  });

});

/*$(function (){
  $('.gallery').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'packery'
  });
});*/


