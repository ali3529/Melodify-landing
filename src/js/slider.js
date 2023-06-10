document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main-carousel', {
        height: "24.6rem",
        type: 'loop',
        focus: 1,
        gap: "1rem",
        autoplay: true,
        drag: true,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
        pauseOnFocus: false,
        direction: 'rtl',
        focus: 'center',
        perPage: 5,

        breakpoints: {

            1024: {
                height: "17.3rem",
                gap: "1rem",
                perPage: 3,

            },

        },
        // autoScroll: {
        //   pauseOnHover: false,
        //   pauseOnFocus: false,
        //   speed: 1.3,
        // },
    }).mount()
})

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.comment-carousel', {
        type: 'loop',
        focus: 1,
        // autoplay: true,
        drag: true,
        gap: ".5rem",
        pauseOnHover: false,
        arrows: false,
        pauseOnFocus: false,
        direction: 'rtl',
        paginationDirection: 'rtl',
        perPage: 2,
        focus: 'center',
        breakpoints: {
            1024: {
                gap: "1rem",
                perPage: 1,

            }
        },
        classes: {
            page: "splide__pagination__page--custome",

        }

    }).mount()
    splide.on("active", {

    })
    var comment = document.getElementById("comment-carousel")
    console.log(comment.style)
})

