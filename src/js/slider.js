document.addEventListener('DOMContentLoaded', function () {
    const slide = new Splide('#main-carousel', {
        autoScroll: {
            speed: 5,
        },
        
        // height: "395px",
        // width: 422,
        type: 'loop',
        focus: 1,
        // autoWidth: true,
     
        autoplay: false,
        drag: true,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
        pauseOnFocus: false,
        direction: 'rtl',
        focus: 1,
        perPage: 2.3,
        direction:"ltr",
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
              perPage:1.7,
              gap: 10,
            },
            830: {
              perPage:1.5,
              gap: 10,
            },
            768: {
              perPage:3,
              gap: 35,
            },
            687: {
              perPage:3,
              gap: 20,
            },
            668: {
              perPage:3,
              gap: 15,
            },
            637: {
              perPage:3,
              gap: 10,
            },
            650: {
              perPage:2.3,
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

    })
    slide.mount()

})

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

document.addEventListener('DOMContentLoaded', function () {
    const commentSlider = new Splide('.comment-carousel', {
        autoScroll: {
            speed: 5,
        },
        type: 'loop',
        autoplay: true,
        drag: true,
        // padding: 20,
        // rewind: true,
        // height: 500,
        autoWidth: true,
        focus: 'center',
        // speed: 0,
        // rewindSpeed: 0,
        drag: true,
        gap: 24,
        // pauseOnHover: false,
        arrows: false,
        // pauseOnFocus: false,
        direction: 'rtl',
        paginationDirection: 'rtl',
        perPage: 3,
        perMove: 1,
        breakpoints: {
            1024: {
                gap: "1rem",
                perPage: 1,

            }
        }

    })

    commentSlider.on('pagination:mounted', function (data) {
        data.list.classList.add('splide__pagination__page--custome');

    });
    commentSlider.mount()
})

