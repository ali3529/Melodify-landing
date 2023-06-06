// import Splide from "@splidejs/splide";
import "./styles.css";

var splide = new Splide(".splide", {
    autoWidth: true,
    type: "loop",
    perPage: 3,
    focus: "center",
    height: 400,
    gap: 10,
    lazyLoad: "nearby"
}).mount();

// Listen to a native event.
var track = splide.Components.Elements.track;
splide.on(
    "click",
    function () {
        // do something.
        // Output a track element
        console.log(splide.Components.Elements.track);
        // Output all slide elements.
        //console.log(splide.Components.Elements.slides);
    },
    track
);
