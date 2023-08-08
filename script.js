// gsap.to(".box", {   // .to - moving object from initial position to final position
//     x:700,
//     duration:2,
//     delay:1,
//     backgroundColor:"teal",
//     rotate:360,
//     scale:0.5
// })

gsap.from(".box",{    // .to - moving object from final position to initial position
    y:500,
    x:400,
    backgroundColor:"lightblue",
    delay:1,
    duration:2
})


// stagger:1  - moving same elements at time interval of 1 second
// reapeat: -1 -  animating element infinitely from initial to final
// yoyo:true/false - animating back and forth
// var tl = gsap.timeline() - to animate element at equal time interval
// tl.to("h1",{
//     x:400,
//     duration:1
// })
// tl.to("h2",{
//     x:700,
//     duration:1
// })
// tl.to("h3",{
//     x:500,
//     duration:1
// })