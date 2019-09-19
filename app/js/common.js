$(document).ready(function () {

   $('.m-services__card').hover(function () {
      let win = $(window);
      if (win.width() >= 992) {
         $(this).children().stop(true, true).slideDown(300);
      }
   }, function () {
      let win = $(window);
      if (win.width() >= 992) {
         $(this).children().stop(true, true).slideUp(300);
      }
   });



   // init Isotope
   var $grid = $('.isotope-grid').isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows'
   });
   // filter items on button click
   $('.filter-button-group').on('click', '.filters__item', function () {

      $(".filters__item").removeClass("filters__active");
      $(this).addClass("filters__active");


      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      return false;
   });


   // 
   $('.loop').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      dots: false,
      center: true,
      items: 2,
      loop: true,
      // margin: 10,
      responsive: {
         600: {
            items: 3
         },
         300: {
            items: 1
         }

      }
   });


   // 
   $('.partner__slide').owlCarousel({
      autoplay: true,
      dots: false,
      center: false,
      items: 4,
      loop: true,
      margin: 10,
      responsive: {
         768: {
            items: 4
         },
         576:{
            items:3
         },
         300: {
            items: 1
         }
      }
   });

   // Carousel

   $('.certificate-carousel__main').owlCarousel({
      margin: 10,

      // autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      items: 3,
      loop: true,
      responsive: {
         900: {
            items: 3
         },
         600: {
            items: 3
         },
         300: {
            items: 1
         }

      }
   });

   $('.project-carousel__main').owlCarousel({
      // autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      items: 3,
      loop: true,
      responsive: {
         900: {
            items: 3
         },
         600: {
            items: 3
         },
         300: {
            items: 1
         }

      }
   });


   // Click document close country-list
   var flag = $('.position-relative .flag');
   var flagList = $('.country-list ');
   flag.click(function () {
      let win = $(window);
      if (win.width() >= 992) {
         $('.country-list ').stop(true, true).fadeToggle(300);
         $(document).click(function (e) {
            var target = e.target;
            if (!$(target).is(flag) && !$(target).parents().is(flag)) {
               flagList.fadeOut(300);
            }
         });
      };
   });




   // Click menu-icon addClass menu__list and menu__overlay
   $('.menu__icon').on('click', function () {
      $('.menu__list').addClass('active__menu__list');
      $('.menu__overlay').addClass('active__menu__overlay');
      $('body').addClass('overflow__body');
   });


   // Click menu__overlay close menu
   $('.menu__overlay').on('click', function () {
      $('.menu__list').removeClass('active__menu__list');
      $('body').removeClass('overflow__body');
      $(this).removeClass('active__menu__overlay');
   });


   // Click menu__overlay close menu
   $('.close').click(function (e) {
      e.preventDefault();
      $('.menu__list').removeClass('active__menu__list');
      $('.menu__overlay').removeClass('active__menu__overlay');
      $('body').removeClass('overflow__body');
   })



   // Lightbox
   var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      loop: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
   });
   var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      thumbs: {
         swiper: galleryThumbs
      }
   });


   // Menu magic-line

   // menu__item_isActive

   // let activeItem=$('.menu__item_isActive');
   // let activeItemLeft=activeItem.offset().left;


   let menuItem = $('.menu__item').not('.menu__close');
   let firstMenuItem = menuItem.eq(0);
   let firstMenuItemOffset = firstMenuItem.offset();
   let firstMenuItemWidth = firstMenuItem.innerWidth();
   let magicLine = $('.magic-line');

   magicLine.width(firstMenuItemWidth);
   magicLine.offset({ left: firstMenuItemOffset.left })


   $(window).resize(function () {

      menuItem = $('.menu__item').not('.menu__close');
      firstMenuItem = menuItem.eq(0);
      firstMenuItemOffset = firstMenuItem.offset();
      firstMenuItemWidth = firstMenuItem.innerWidth();

      magicLine = $('.magic-line');
      magicLine.width(firstMenuItemWidth);
      magicLine.offset({ left: firstMenuItemOffset.left })
   });

   menuItem.hover(
      function () {
         let itemWidth = $(this).innerWidth();
         let itemOffset = $(this).offset();
         magicLine.width(itemWidth);
         magicLine.offset({ left: +itemOffset.left })
      },
      function () {

         magicLine.width(firstMenuItemWidth);
         magicLine.offset({ left: firstMenuItemOffset.left });
      }
   )

  







   // Common-F
   $(".owl-carousel").owlCarousel();


   // init Isotope
   var $grid = $('.isotope-grid').isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows'
   });
   // filter items on button click
   $('.filter-button-group').on('click', '.filters__item', function () {

      $(".filters__item").removeClass("filters__active");
      $(this).addClass("filters__active");


      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      return false;
   });

   // Carousel

   $('.certificate-carousel__main').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      items: 3,
      loop: true,
      responsive: {
         900: {
            items: 3
         },
         600: {
            items: 3
         },
         300: {
            items: 1
         }

      }
   });

   $('.project-carousel__main').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      items: 3,
      loop: true,
      responsive: {
         900: {
            items: 3
         },
         600: {
            items: 3
         },
         300: {
            items: 1
         }

      }
   });


})













