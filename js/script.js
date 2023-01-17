$(document).ready(function(){
    $('.promo__slick').slick({
        dots: true,
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/footer/shevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/footer/shevron_right.png"></button>'
      });
  });
  

  $(document).ready(function(){
    $('.work__slick').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/footer/shevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/footer/shevron_right.png"></button>'
      });
  });

  $(document).ready(function(){
    $('.thanks__slick').slick({
        dots: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/footer/shevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/footer/shevron_right.png"></button>'});
  });

  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
    });