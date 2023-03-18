var titleMain = $(".animatedHeading");
var titleSubs = titleMain.find("slick-active");
if (titleMain.length) {
    titleMain.slick({
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        centerPadding: "0px",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        vertical: true,
        verticalScrolling: true,
        centerMode: false,
        speed: 1000,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    });
};
var category = [10332, 516600];
let timer = null;
let index = 0;

function odoInit(item) {
    var counter = new Odometer({
        el: document.querySelector("#odometer"),
        minIntegerLen: 6,
        format: "(,ddd)",
        theme: "default",
        value: 0
    });
    counter.update(item);
}

function printCategory() {
    odoInit(category[index]);
    titleMain.slick('slickGoTo', index);
    if (index === 1) {
        index = 0;
    } else {
        index++;
    }
}
odoInit();
setTimeout(() => {
    printCategory();
    setInterval(function() {
        printCategory();
    }, 5000);
}, 500);