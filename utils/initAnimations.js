export function initAnimations() {
  const ctasDefault = document.querySelectorAll(".cta-default");
  const ctasWhite = document.querySelectorAll(".cta-white");
  const $duration = 0.4;
  const $ease = "power3.inout";

  ctasDefault.forEach((cta) => {
    cta.addEventListener("mouseenter", () => {
      gsap.to(cta, {
        duration: $duration,
        backgroundColor: "transparent",
        ease: $ease,
      });
      gsap.to(cta.querySelector("span"), {
        duration: $duration,
        color: " #0d26e3",
        ease: $ease,
      });
      gsap.to(cta.querySelector("div"), {
        duration: $duration,
        borderColor: "#0d26e3",
        backgroundColor: "#0d26e3",
        ease: $ease,
      });
    });
    cta.addEventListener("mouseleave", () => {
      gsap.to(cta, {
        duration: $duration,
        backgroundColor: "#0d26e3",
        ease: $ease,
      });
      gsap.to(cta.querySelector("span"), {
        duration: $duration,
        color: "var(--color-bg)",
        ease: $ease,
      });
      gsap.to(cta.querySelector("div"), {
        duration: $duration,
        borderColor: "var(--color-bg)",
        ease: $ease,
      });
    });

    ctasWhite.forEach((cta) => {
      cta.addEventListener("mouseenter", () => {
        gsap.to(cta, {
          duration: $duration,
          backgroundColor: "#0d26e3",
          borderColor: "var(--color-bg)",
          ease: $ease,
        });
        gsap.to(cta.querySelector("span"), {
          duration: $duration,
          color: "#f2f3f4",
          ease: $ease,
        });
        if (cta.querySelector("svg")) {
          gsap.to(cta.querySelector("svg path"), {
            duration: $duration,
            fill: "var(--color-bg)",
            ease: $ease,
          });
          gsap.to(cta.querySelector("svg"), {
            duration: $duration,
            xPercent: 20,
            ease: $ease,
          });
        } else if (cta.querySelector("div")) {
          gsap.to(cta.querySelector("div"), {
            duration: $duration,
            backgroundColor: "var(--color-bg)",
            ease: $ease,
          });
        }
      });
      cta.addEventListener("mouseleave", () => {
        gsap.to(cta, {
          duration: $duration,
          backgroundColor: "var(--color-bg)",
          borderColor: "var(--color-primary)",
          ease: $ease,
        });
        gsap.to(cta.querySelector("span"), {
          duration: $duration,
          color: "var(--color-primary)",
          ease: $ease,
        });
        if (cta.querySelector("svg")) {
          gsap.to(cta.querySelector("svg path"), {
            duration: $duration,
            fill: "var(--color-primary)",
            ease: $ease,
          });
          gsap.to(cta.querySelector("svg"), {
            duration: $duration,
            xPercent: 0,
            ease: $ease,
          });
        } else if (cta.querySelector("div")) {
          gsap.to(cta.querySelector("div"), {
            duration: $duration,
            backgroundColor: "var(--color-bg)",
            ease: $ease,
          });
        }
      });
    });
  });


  const isIndex = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");


  // Split text
  gsap.registerPlugin(SplitText);
  const nav = document.querySelector("nav");

  // split elements with the class "split" into words and characters
  let split = SplitText.create(".split", { type: "lines, words, chars" });
  split.chars.forEach((char) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("overflow-wrapper");
    wrapper.style.overflow = "hidden";
    wrapper.style.display = "inline-block";

    char.parentNode.insertBefore(wrapper, char);
    wrapper.appendChild(char);
  });
  const tl = gsap.timeline();

  // now animate the characters in a staggered fashion
  tl.from(split.chars, {
    duration: 1,
    xPercent: -100,
    stagger: 0.0,
    ease: "power4.inOut",
    delay: 0.3
  })
   if(document.querySelector('.large-img-appear')) {

    tl.from('.large-img-appear', {
        yPercent:5,
        duration: 1.2,
        autoAlpha: 0,
        ease:"power4.inout"
    }, "<")
   }
    if (isIndex) {
         tl.from(
      ".bar",
      {
        width: 0,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "<80%"
    )
    .from(
      "nav",
      {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "<"
    )
    .from(
      ".business-card",
      {
        xPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "<"
    )
  .from(
      ".tag-list li",
      {
        yPercent: -30,
        duration: 0.8,
        stagger: 0.05,
        autoAlpha: 0,
        ease: "power4.out",
      },
      "<80%"
    )
    .from('.home-hero a', {
        yPercent: -30,
        duration: 0.8,
        autoAlpha: 0,
        ease: "power4.out",
    },"<20%")
    .from(".scroll-call", {
      duration: 0.6,
      autoAlpha: 0,
    })
    .to(
      ".scroll-call div",
      {
        duration: 3,
        yPercent: 200,
        repeat: -1,
        ease: "expo.out",
      },
      "<50%"
    )

}
    

  // Navbar animations
  const lisNav = document.querySelectorAll("nav ul li:not(.nav__contact)");

  lisNav.forEach((liNav) => {
    liNav.addEventListener("mouseenter", () => {
      gsap.to(liNav, {
        "--underline-scaleX": 1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
      });
    });
    liNav.addEventListener("mouseleave", () => {
      gsap.to(liNav, {
        "--underline-scaleX": 0,
        duration: 0.2,
        ease: "linear",
        overwrite: true,
      });
    });
  });

  // ScrollSmoother
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });

  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // Attendre une frame pour laisser ScrollSmoother s’installer
      requestAnimationFrame(() => {
        const smoother = ScrollSmoother.get();
        const targetY = smoother.offset(target, "top top");

        // Scroll fluide avec GSAP
        gsap.to(smoother, {
          scrollTop: targetY,
          duration: 1,
          ease: "power2.out",
        });
      });
    }
  }

// Appartions scrolltrigger

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.from(section, {
    y: 50,
    autoAlpha: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: section,
      scroller: "#smooth-wrapper",
      start: "top bottom",
      toggleActions: "play none none reverse",
      markers: false,
    },
  });
});


}
