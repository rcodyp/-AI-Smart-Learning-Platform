let time = gsap.timeline({defaults: {ease: "power2.out"}});

time.from("#nav div", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5
})

time.from("#overlay",{
  x: -100,  
  opacity: 0,
  duration: 0.5,
  stagger: 0.3
})

gsap.from("#center div", {
  x: -100,  
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",   
    end: "top -100%",  
    scrub:2     
  }

})

time.from("#footer div", {
    opacity: 0,
    duration: 0.8,
})


gsap.to("#page2 video", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",   
    end: "top -100%",  
    pin: true         
  }
});


gsap.registerPlugin(ScrollTrigger);

// Create a timeline with default easing
let time2 = gsap.timeline({ defaults: { ease: "power2.out" } });

// Circle animation
time2.to("#page3 #circle", {
  width: "200vw",
  height: "200vh",
  duration: 1.5,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true     
  }
})
