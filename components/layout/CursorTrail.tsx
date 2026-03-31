'use client';

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current || document.getElementById("trail") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let points: Array<{ x: number; y: number }> = [];
    let ripples: Array<{ x: number; y: number; radius: number; alpha: number }> = [];

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const handleMouseMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY });
      if (points.length > 10) points.shift();
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        const last = points[points.length - 1];
        const grad = ctx.createLinearGradient(points[0].x, points[0].y, last.x, last.y);
        grad.addColorStop(0, "black");
        grad.addColorStop(1, "white");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      ripples.forEach((r) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        r.radius += 1;
        r.alpha -= 0.02;
      });
      ripples = ripples.filter((r) => r.alpha > 0);

      requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
