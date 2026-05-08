"use client";

import React from "react";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]<>=*+-/&|;()".split("");
const FONT_SIZE = 14;
const TARGET_FPS = 24;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const FADE_ALPHA = 0.07;
const RESET_PROBABILITY = 0.975;
const LEADING_FILL = "rgba(252, 211, 104, 0.35)";
const TRAIL_FILL = "rgba(252, 211, 104, 0.15)";
const FADE_FILL = `rgba(20, 19, 15, ${FADE_ALPHA})`;

export default function MatrixRain() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const dpr = window.devicePixelRatio || 1;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.scale(dpr, dpr);
      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', 'SF Mono', monospace`;
      ctx.textBaseline = "top";
      columns = Math.floor(w / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    };

    resize();
    window.addEventListener("resize", resize);

    let rafId = 0;
    let lastFrame = 0;

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (time - lastFrame < FRAME_INTERVAL) return;
      lastFrame = time;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.fillStyle = FADE_FILL;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < columns; i++) {
        const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx.fillStyle = LEADING_FILL;
        ctx.fillText(char, x, y);

        if (drops[i] > 1) {
          const trailChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          ctx.fillStyle = TRAIL_FILL;
          ctx.fillText(trailChar, x, y - FONT_SIZE);
        }

        if (y > h && Math.random() > RESET_PROBABILITY) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}
