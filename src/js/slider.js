/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide", {
    type: "loop",
    direction: "ltr",
    drag: false,
    autoplay: true,
    speed: 900,
    interval: 3000,
    width: "100%",
    perPage: 2.5,
    perMove: 1,
    pagination: false,
    arrows: false,
    breakpoints: {
      1000: {
        perPage: 2.3,
      },
      900: {
        perPage: 2,
      },

      768: {
        perPage: 2.3,
        gap: "1rem",
      },
    },
  });
  splide.on("active", function (data) {
    if (data.slide.classList.contains("is-active") && !data.isClone) {
      document.getElementById("mobile_frame_container").style.width =
        data.slide.offsetWidth + "px";
    }
  });

  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const commentsSplide = new Splide("#comments-splide", {
    direction: "rtl",
    type: "loop",
    perPage: 2.5,
    focus: "center",
    arrows: false,
    gap: "2.5rem",
    drag: true,
    autoplay: true,
    speed: 1000,
    classes: {
      pagination: "splide__pagination !flex sm:!-bottom-0 ",
      page: "splide__pagination__page !bg-gray5  !h-[5px] !w-[10px] !rounded-[100px] [&.is-active]:!bg-yellow [&.is-active]:!transform-none [&.is-active]:!opacity-100 [&.is-active]:!w-6 [&.is-active]:!mx-[6px]",
    },
    breakpoints: {
      768: {
        perPage: 1,
      },
      850: {
        perPage: 2.1,
      },
      1650: {
        gap: "2.5rem",
      },
      3560: {
        gap: "5rem",
      },
    },
  });

  commentsSplide.on("move", (newIndex, oldIndex) => {
    if (screen.width > 768) {
      const newSlide = commentsSplide.Components.Elements.slides[newIndex];
      newSlide.classList.add("active-comment-slide");

      const oldSlide = commentsSplide.Components.Elements.slides[oldIndex];
      oldSlide.classList.remove("active-comment-slide");
    }
  });

  commentsSplide.on("ready", () => {
    if (screen.width > 768) {
      const firstSlide = commentsSplide.Components.Elements.slides[0];
      firstSlide.classList.add("active-comment-slide");
    }
  });

  commentsSplide.mount();
});
