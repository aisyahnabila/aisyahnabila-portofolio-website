import { useEffect, useRef, useState } from "react";

/** Tracks the `dark` class that App.tsx toggles on <html>. */
export function useIsDarkMode() {
  const [isDark, setIsDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

const RAMP = [" ", "·", "·", ":", "+"];
const MAX_CELLS = 6000;
const FRAME_MS = 1000 / 30;
const GRAY = "148,163,184";
const BLUE = "59,130,246";

/**
 * Slow, self-driven field of ASCII dots (no pointer input). Each cell's
 * character and alpha come from a sum of drifting sine waves; a second slow
 * wave tints a few cells with the logo blue. Pauses when the tab is hidden
 * or the hero is off-screen, and renders a single static frame under
 * prefers-reduced-motion.
 */
export function HeroAsciiDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let cell = 16;
    let raf = 0;
    let last = 0;
    let visible = true;

    const draw = (time: number) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${Math.round(cell * 0.8)}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * 0.55;
          const y = r * 0.55;
          const v =
            (Math.sin(x * 0.55 + t * 0.35) +
              Math.sin(y * 0.7 - t * 0.28) +
              Math.sin((x + y) * 0.38 + t * 0.2)) /
            3; // -1..1
          const n = (v + 1) / 2; // 0..1
          const level = Math.min(RAMP.length - 1, Math.floor(n * n * RAMP.length * 1.15));
          const ch = RAMP[level];
          if (ch === " ") continue;
          const tint = Math.sin(x * 0.3 - y * 0.25 + t * 0.15) > 0.72;
          const alpha = 0.05 + n * 0.17;
          ctx.fillStyle = `rgba(${tint ? BLUE : GRAY},${tint ? alpha * 1.3 : alpha})`;
          ctx.fillText(ch, c * cell + cell / 2, r * cell + cell / 2);
        }
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < FRAME_MS) return;
      last = now;
      draw(now);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const sync = () => {
      stop();
      if (motionQuery.matches) {
        draw(4000); // static pattern
      } else if (visible && !document.hidden) {
        raf = requestAnimationFrame(loop);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      cell = Math.max(16, Math.ceil(Math.sqrt((width * height) / MAX_CELLS)));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sync();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersection.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    motionQuery.addEventListener("change", sync);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        // keep the text column calm; dots grow stronger toward the photo side
        maskImage: "linear-gradient(to right, rgba(0,0,0,0.35), #000 65%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.35), #000 65%)",
      }}
    />
  );
}
