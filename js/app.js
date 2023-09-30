// menu toogle 

const menuToggle = document.getElementById('menu-toggle');
const menuu = document.getElementById('menuu');

menuToggle.addEventListener('click', function() {
  menuu.classList.toggle('hidden');
  menuToggle.classList.toggle('active');
});


// menu scroll 

$(function () {

  $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop()
      if (scrollSize > 500) {
          $('#backtotop').slideDown()
      } else {
          $('#backtotop').slideUp()
      }


      if (scrollSize > 500) {
          $('#navigation').addClass('active')
      } else {
          $('#navigation').removeClass('active')
      }
  })
}) 




// banner slider 
$(function(){
  'use strict'

  $('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: 'slider-dots',
    prevArrow:'.banner_left_arrow',
    nextArrow:'.banner_right_arrow',
    pauseOnHover: false,
  });

})

// service slider 


$(function(){
  $('.service_slider').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    prevArrow:'.service_left_arrow',
    nextArrow:'.service_right_arrow',
    pauseOnHover: true,
  })
})


// portfolio slider 

$(function(){
  $('.port-slider').slick({
    slidesToShow:4,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    dots: true,
    dotsClass: 'portfolio-dots',
    prevArrow:'.portLeft',
    nextArrow:'.portRight'
  })
})


// blog slider 

$(function(){
  $('.blog-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    prevArrow:'.blogLeft',
    nextArrow:'.blogRight',
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: false,
    centerMode: true,
    dots: true,
    dotsClass: 'blog-dots'
  })
})



// testimonial slider 

$(function(){
  $('.test-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    fade: true,
    prevArrow: '.test_left',
    nextArrow: '.test_right',
    dots: true,
    dotsClass: 'test-dot',
    asNavFor: '.testimonial-imgs-slider'

  })

  $('.testimonial-imgs-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    arrows: false,
    centerPadding: "0px",
    asNavFor: ".test-slider",
  })
})


// web icon slider 

$(function(){
  $('.web-icon-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    prevArrow: '.web_left',
    nextArrow: '.web_right'
  })
})






// preloader 


$(window).on('load', function(){
  $('#preloader').fadeOut(2000);
})


// about section 

$('.about-content ul li a').on('click', function () {
  $('.about-content ul li a').removeClass('active');
  $(this).addClass('active');
});




// countring number -counter 

jQuery(document).ready(function($) {
  $('.counting_number').counterUp({
      delay: 10,
      time: 2000
  });
});


//  backto top 

  $('#backtotop').on('click', function () {
      $('html, body').animate({
          scrollTop:0,
      },1000)
  })

 
// aos 

AOS.init();



// venobox 

new VenoBox();

new VenoBox({
  selector: '.my-video-links',
});

new VenoBox({
  selector: '.blog-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});






// typed JS 

var typed = new Typed('#welcome_produstry', {
  strings: ['Welcome to PRODUSTRY '],
  typeSpeed: 80,
  backSpeed: 20,
  loop: true,
  shuffle: true,

});

var typed = new Typed('#service_typed', {
  strings: ['Our Services'],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
  shuffle: true,

});

var typed = new Typed('#about_typed', {
  strings: ['About US'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  shuffle: true,

});

var typed = new Typed('#port_type', {
  strings: ['Our Portfolio '],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  shuffle: true,

});

var typed = new Typed('#blog_typed', {
  strings: ['Our Blog '],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
  shuffle: true,

});


var typed = new Typed('#test_typed', {
  strings: ['Our Testimonial'],
  typeSpeed: 100,
  backSpeed: 20,
  loop: true,
  shuffle: true,

});

var typed = new Typed('#news_typed', {
  strings: ['Nice Newest Construction Factory Work'],
  typeSpeed: 70,
  backSpeed: 20,
  loop: true,
  shuffle: true,

});

var typed = new Typed('#news_typed2', {
  strings: ['Awesome Newest Construction Factory Work'],
  typeSpeed: 60,
  backSpeed: 10,
  loop: true,
  shuffle: true,

});











