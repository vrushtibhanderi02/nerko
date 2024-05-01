 // pre-loader
 $(document).ready(function(){
  setTimeout(function(){
    $('.pre-loader').fadeOut();
  },3000);
});

// bottomtop 
var btn = $('.top-bottom');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// accodian

$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});




// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    
});
$(document).ready(function(){

    var counted = 0;
    $(window).scroll(function() {
    
      var oTop = $('.num1-incre').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
    
            {
    
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
    
            });
        });
        counted = 1;
      }
    });

    $(".owl-carousel").owlCarousel({
      center:1,
      margin:40,
      smartSpeed:3000,
      startPosition:0,
      nav:true,
      dots:false,
      navText:['<i class="las la-angle-left"></i>','<i class="las la-angle-right"></i>']

    })


});


// aos librabry


AOS.init({
  easing: 'ease-out-back',
  duration: 2000
});





