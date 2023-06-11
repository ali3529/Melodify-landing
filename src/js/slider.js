document.addEventListener('DOMContentLoaded', function () {
    const slide = new Splide('#main-carousel', {
        height: "24.6rem",
        width: 460,
        type: 'loop',
        focus: 1,
        // autoWidth: true,
        gap: 50,
        autoplay: true,
        drag: true,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
        pauseOnFocus: false,
        direction: 'rtl',
        focus: 'center',
        perPage: 3,
        breakpoints: {

            1024: {
                height: "17.3rem",
                gap: 20,
                perPage: 3,

            },

        },

    })
    slide.mount()

})

document.addEventListener('DOMContentLoaded', function () {
    const commentSlider = new Splide('.comment-carousel', {
        type: 'loop',
        autoplay: true,
        // padding: 20,
        rewind: true,
        // height: 500,
        autoWidth: true,
        focus: 'center',
        speed: 0,
        // rewindSpeed: 0,
        drag: true,
        gap: 24,
        // pauseOnHover: false,
        arrows: false,
        // pauseOnFocus: false,
        direction: 'rtl',
        paginationDirection: 'rtl',
        // perPage: 3,
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

