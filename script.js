gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroll: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.top = dets.y + "px"
    crsr.style.left = dets.x + "px"
    blur.style.top = dets.y - 180 + "px"
    blur.style.left = dets.x - 180 + "px"
})


gsap.from("#about-us img , #about-us-1", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: " #about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub : 5
    }
})

gsap.from(".card", {
    y: 50,
    scale : 0.8 ,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: " .card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub : 1
    }
})