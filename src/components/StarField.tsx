"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
  hue: string;
};

const HUES = ["#4deaff", "#9b5cff", "#ff4de3", "#ffffff", "#ffd24d"];

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStars: {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      life: number;
    }[] = [];
    let animationId: number;
    let lastShoot = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      const count = Math.floor((width * height) / 3500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.02,
        driftY: (Math.random() - 0.5) * 0.02,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      }));
    };

    const drawShootingStar = (s: (typeof shootingStars)[number]) => {
      const tailX = s.x - Math.cos(s.angle) * s.len;
      const tailY = s.y - Math.sin(s.angle) * s.len;
      const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${s.life})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    };

    const tick = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const twinkle =
          star.baseAlpha +
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = star.hue;
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (time - lastShoot > 2600 + Math.random() * 2600) {
        lastShoot = time;
        shootingStars.push({
          x: Math.random() * width * 0.6 + width * 0.2,
          y: Math.random() * height * 0.3,
          len: 120 + Math.random() * 80,
          speed: 8 + Math.random() * 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          life: 1,
        });
      }

      shootingStars = shootingStars.filter((s) => s.life > 0);
      for (const s of shootingStars) {
        drawShootingStar(s);
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= 0.02;
      }

      animationId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
