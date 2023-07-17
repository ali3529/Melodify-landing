document.addEventListener("DOMContentLoaded", function () {
  const slide = new Splide("#main-carousel", {
    autoScroll: {
      speed: 5,
    },

    // height: "395px",
    // width: 422,
    type: "loop",
    focus: 1,
    // autoWidth: true,

    autoplay: false,
    drag: true,
    pauseOnHover: false,
    pagination: false,
    arrows: false,
    pauseOnFocus: false,
    direction: "rtl",
    focus: 1,
    perPage: 2.3,
    direction: "ltr",
    // breakpoints: {

    //     // 1024: {
    //     //     height: "17.3rem",
    //     //     gap: 20,
    //     //     perPage: 3,

    //     // },

    // },

    breakpoints: {
      1500: {
        gap: 35,
      },
      1480: {
        gap: 30,
      },
      1400: {
        gap: 25,
      },
      1380: {
        gap: 20,
      },
      1350: {
        gap: 15,
      },
      1330: {
        perPage: 2,
        gap: 15,
      },
      950: {
        perPage: 2,
        gap: 10,
      },
      930: {
        perPage: 1.7,
        gap: 10,
      },
      830: {
        perPage: 1.5,
        gap: 10,
      },
      768: {
        perPage: 3,
        gap: 35,
      },
      687: {
        perPage: 3,
        gap: 20,
      },
      668: {
        perPage: 3,
        gap: 15,
      },
      637: {
        perPage: 3,
        gap: 10,
      },
      650: {
        perPage: 2.3,
        gap: 10,
      },

      // 1000: {
      //   perPage: 3,
      //   gap: "2rem",
      // },
      // 600: {
      //   padding: { left: "-50px" },
      //   focus: "center",
      //   perPage: 2,
      // },
      // 340: {
      //   padding: { left: "-200px" },
      //   focus: "center",
      //   perPage: 1,
      // },
    },
    //    breakpoints: {
    //     1300: {
    //       perPage: 4,
    //       gap: "2rem",
    //     },
    //     1000: {
    //       perPage: 3,
    //       gap: "2rem",
    //     },
    //     600: {
    //       padding: { left: "-50px" },
    //       focus: "center",
    //       perPage: 2,
    //     },
    //     340: {
    //       padding: { left: "-200px" },
    //       focus: "center",
    //       perPage: 1,
    //     },
    //   },
  });
  slide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide", {
    type: "loop",
    // rewind: true,
    direction: "rtl",
    perPage: 4,
    perMove: 1,
    pagination: false,
    arrows: false,
    breakpoints: {
      1300: {
        perPage: 4,
        gap: "2rem",
      },
      1000: {
        perPage: 3,
        gap: "2rem",
      },
      600: {
        padding: { left: "-50px" },
        focus: "center",
        perPage: 2,
      },
      340: {
        padding: { left: "-200px" },
        focus: "center",
        perPage: 1,
      },
    },
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const commentSlider = new Splide(".comment-carousel", {
    autoScroll: {
      speed: 5,
    },
    type: "loop",
    // autoplay: true,
    drag: true,
    rewind : true,
    // padding: 20,
    // rewind: true,
    height: 182,
    // width:505,
    autoWidth: true,
    focus: "center",
    // speed: 0,
    // rewindSpeed: 0,
    drag: true,
    gap: 240,
    // pauseOnHover: false,
    arrows: false,
    // pauseOnFocus: false,
    direction: "rtl",
    paginationDirection: "rtl",
    perPage: 3,
    pagination: true,
    // padding:0,
    
    classes: {
      pagination:
        "splide__pagination !flex !bottom-[15px] comment-carousel-class-pagination",
      page:
       "splide__pagination__page !bg-gray5  !h-[5px] !w-[9px] !rounded-[100px] comment-carousel-class-page [&.is-active]:!bg-yellow [&.is-active]:!w-6 [&.is-active]:!mx-[6px]",
      // active: 
      // "splide__slide--active",
    },
    // perMove: 1,
    // breakpoints: {
    //     1024: {
    //         gap: "1rem",
    //         perPage: 1,

    //     }
    // }

    // type    : 'loop',
    // perPage : 3,
    // autoplay: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  });
  // commentSlider.on('active', function (data) {
  //   console.log({data})
  //     data.slide.classList.add('!w-[604px]');
  //     data.slide.classList.add('!h-[217px]');

  // });
  // commentSlider.on('inactive', function (data) {
  //   console.log({data})
  //     data.slide.classList.remove("!w-[604px]");
  //     data.slide.classList.remove('!h-[217px]');

  // });

  //   commentSlider.on('move', function(newIndex,prevIndex,destIndex) {
  //     console.log("first",{newIndex,prevIndex,destIndex})
  //   // Remove the active class from the previous slide
  //   // const prevActiveSlide = document.querySelector('.splide__slide--active');
  //   // console.log(prevActiveSlide)
  //   // if (prevActiveSlide) {
  //   //   prevActiveSlide.classList.remove('splide__slide--active');
  //   // }

  //   // // Add the active class to the current slide
  //   // const activeSlide = document.querySelector('.splide__slide--active');
  //   // console.log({activeSlide})
  //   // if (activeSlide) {
  //   //   activeSlide.classList.add('splide__slide--active');
  //   // }
  //   const slides=document.getElementsByClassName("splide__slide--comment")
  //   console.log(slides[newIndex])
  //   const newSlideClassList=slides[newIndex]?.classList
  //   const prevSlideClassList=slides[prevIndex]?.classList

  //   if (!newSlideClassList.contains("splide__slide--active")) {
  //     // console.log("first")
  //     newSlideClassList.add('splide__slide--active')

  //   }
  //   // if (prevSlideClassList.contains("splide__slide--active")) {

  //   // prevSlideClassList.remove('splide__slide--active');
  //   // }
  //   // commentSlider.refresh();

  // });
  // commentSlider.on( 'mounted', function (data) {
  //   console.log(data)
  //   // This will be executed.
  // } );

  commentSlider.mount();
});
