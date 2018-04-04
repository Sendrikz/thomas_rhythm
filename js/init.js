$( function() {
    // Init tabs
    $( "#tabs" ).tabs();
    $("#portfolio-tabs").tabs();
    // Init slick carousel
    $('.reviews-carousel').slick({
      dots:true,
      prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
      nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>'
    });
    // Init slick-nav (burger)
    $('.header-nav').slicknav({
      appendTo: '.header .container-fluid',
      label: ''
    });
  });