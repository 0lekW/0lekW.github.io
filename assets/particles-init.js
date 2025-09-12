particlesJS("particles-js", {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 900 } },
    color: { value: ["#ffffff"] },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 2.5, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 2, random: true, out_mode: "out" }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: false },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      repulse: { distance: 80, duration: 0.67 }
    }
  },
  retina_detect: true
});
