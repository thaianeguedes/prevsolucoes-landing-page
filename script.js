window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Timeline da hero no carregamento da página
  const tl = gsap.timeline();

  tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.6 })
    .from(".hero-title", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3")
    .from(".hero-text", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
    .from(".hero-buttons", { y: 40, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.6")
    .from(".hero-image", { scale: 0.95, opacity: 0, duration: 1 }, "-=1");

  // Scroll suave para âncoras internas usando ScrollToPlugin
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetID = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetID);
      if (!targetSection) return;

      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

      gsap.to(window, {
        scrollTo: targetPosition,
        duration: 1.2,
        ease: "power2.out"
      });
    });
  });

  gsap.utils.toArray(".bg-white").forEach((element, i) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power1.out",
    delay: i * 0.15 // efeito stagger simples
  });
});

 
  });

