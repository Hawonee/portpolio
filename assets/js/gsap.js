gsap.registerPlugin(ScrollTrigger);

gsap.to(".sticker-box img", {
  stagger: {
    from: "random",
    amount: 0.3,
  },
  opacity: 1,
  scale: 0.8,
});
