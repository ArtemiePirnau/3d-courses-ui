$(".works__inner").slick({
  arrows: false,
  slidesToScroll: 1,
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 887,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
});
$(".menu-toggle").on("click", () => {
  $(".menu, .menu__list").toggleClass("show");
});
