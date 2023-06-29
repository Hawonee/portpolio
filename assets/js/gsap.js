gsap.registerPlugin(ScrollTrigger);


// $('.txt-box').each(function(i,el){
//   child = $(this).find('span')
//   gsap.from(child, {
    
//   })
// } )

gsap.from(".main-txt .txt-box",{
  y:50,
  opacity: 0,
  stagger: 1,
  duration: .4
})

gsap.to(".sticker-box img", {
  delay: 0.8,
  stagger: {
    from: "random",
    amount: 0.3,
  },
  opacity: 1,
  scale: 0.8,
});
