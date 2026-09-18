import confetti from "canvas-confetti";

const NEON_COLORS = ["#4deaff", "#ff4de3", "#9b5cff", "#ffd24d", "#ffffff"];

export function burstConfetti() {
  const duration = 2500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.7 },
      colors: NEON_COLORS,
      scalar: 1.1,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.7 },
      colors: NEON_COLORS,
      scalar: 1.1,
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  confetti({
    particleCount: 140,
    spread: 100,
    startVelocity: 45,
    origin: { y: 0.5 },
    colors: NEON_COLORS,
    scalar: 1.2,
  });
}

export function fireworkConfetti() {
  confetti({
    particleCount: 90,
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    origin: {
      x: Math.random() * 0.6 + 0.2,
      y: Math.random() * 0.4 + 0.1,
    },
    colors: NEON_COLORS,
    shapes: ["star", "circle"],
    scalar: 1,
  });
}
