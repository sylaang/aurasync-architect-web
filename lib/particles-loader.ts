// lib/particles-loader.ts
export const loadParticles = () => {
  if (typeof window === 'undefined') return;

  if ((window as any).particlesJS) {
    initParticles();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.async = true;
  
  script.onload = () => {
    if ((window as any).particlesJS) {
      initParticles();
    }
  };

  document.head.appendChild(script);
};

const initParticles = () => {
  if (!(window as any).particlesJS) return;

  (window as any).particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 1200 },
        limit: 150
      },
      color: {
        value: ["#ffffff", "#fef3c7", "#7dd3fc", "#c7d2fe"]
      },
      shape: { type: "circle" },
      opacity: {
        value: 0.7,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 1.5,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.1,
        width: 0.5
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 561.194221302933, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 240, line_linked: { opacity: 1 } },
        bubble: { distance: 180, size: 0, duration: 1, opacity: 0.8, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 2 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
};