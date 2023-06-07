document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main-carousel', {
        type: 'loop',
        focus: 1,
        autoplay: true,
        drag: true,
        gap: "2.4rem",
        pauseOnHover: false,
        pagination: false,
        arrows: false,
        pauseOnFocus: false,
        direction: 'rtl',
        perPage: 3,
        focus: 'center',
        breakpoints: {
            1024: {
                gap: "1rem"
            }
        },
        // autoScroll: {
        //   pauseOnHover: false,
        //   pauseOnFocus: false,
        //   speed: 1.3,
        // },
    }).mount()
})