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


$(document).ready(function(){
  			$('.client-carousel').slick({
    			autoplay: true,
				autoplaySpeed: 2000,
				prevArrow: $('.client-prev'),
				nextArrow: $('.client-next'),
				slidesToShow: 5,
				slidesToScroll: 1,
				
  			});
		});



$(document).ready(function(){
  			$('.reference-carousel').slick({
				prevArrow: $('.ref-prev'),
				nextArrow: $('.ref-next'),
  			});
		});

	


