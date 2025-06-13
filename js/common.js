$(document).ready(function(){ // 시작
  AOS.init();

  // 데스크탑 2뎁스
  $("header .gnb > li .depth2").hide();

  $(".gnb > li").hover(function(){
    $(this).children(".depth2").stop().slideToggle();
  });

  // 모바일 메뉴 열기
  $(".ham").click(function(){
    $(".mgnb-wrap").animate({"left" : "0"});
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({"left" : "100%"});
  });

  // 모바일 2뎁스
  $("header .mgnb > li .mdepth2").hide();


  $(".mgnb > li").click(function(){

    if($(this).children(".mdepth2").css("display") == "none"){
      $(this).children(".mdepth2").slideDown();
      $(this).siblings().children(".mdepth2").slideUp();
    }else{
      $(this).children(".mdepth2").slideUp();
    }

  });


  // 검색영역
  $(".search").hide();

  $(".btn-search").click(function(){
    $(".search").fadeToggle();
    $("header").toggleClass("active");
    $(this).toggleClass("active");
  });

   // 배너슬라이드
  const banner_list = new Swiper(".banner-list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    loop: true,
  });

  //메뉴 슬라이드
  const menu_list = new Swiper(".menu-list", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        768: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 4,
        },
    },
  });
}); // 끝