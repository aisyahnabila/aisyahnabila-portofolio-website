import { useEffect, useRef, useState } from "react";

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, [role="button"], [role="link"], [role="tab"], [role="menuitem"], [role="switch"], [role="checkbox"]';
const RING_SIZE = 20;
const FOLLOW_RATE = 14; // higher = tighter follow, lower = more lag
const HOVER_SCALE = 1.5;

/**
 * Small ring that eases toward the native pointer (the real cursor stays
 * visible). Mounted only on fine-pointer devices when reduced motion is not
 * requested — otherwise nothing is rendered and no listeners are attached.
 * Position is written straight to the DOM from one rAF loop that goes idle
 * once the ring catches up and is restarted by the next pointer move.
 */
export function SmoothCursorFollower() {
  const ringRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(HOVER_QUERY).matches &&
      !window.matchMedia(REDUCED_MOTION_QUERY).matches
  );

  useEffect(() => {
    const hover = window.matchMedia(HOVER_QUERY);
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);
    const update = () => setEnabled(hover.matches && !reduced.matches);
    update();
    hover.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      hover.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const ring = ringRef.current;
    const inner = innerRef.current;
    if (!enabled || !ring || !inner) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let hasPosition = false;
    let rafId = 0;
    let lastTime = 0;

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const k = 1 - Math.exp(-FOLLOW_RATE * dt);
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      ring.style.transform = `translate3d(${pos.x - RING_SIZE / 2}px, ${pos.y - RING_SIZE / 2}px, 0)`;
      if (Math.abs(target.x - pos.x) < 0.1 && Math.abs(target.y - pos.y) < 0.1) {
        rafId = 0; // settled: idle until the next pointer move
        return;
      }
      rafId = requestAnimationFrame(render);
    };

    const start = () => {
      if (rafId || document.hidden) return;
      lastTime = performance.now();
      rafId = requestAnimationFrame(render);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (!hasPosition) {
        hasPosition = true;
        pos.x = target.x;
        pos.y = target.y;
        ring.style.transform = `translate3d(${pos.x - RING_SIZE / 2}px, ${pos.y - RING_SIZE / 2}px, 0)`;
        ring.style.opacity = "1";
      }
      start();
    };

    const onPointerOver = (event: PointerEvent) => {
      const el = event.target instanceof Element ? event.target : null;
      const interactive = !!el?.closest(INTERACTIVE_SELECTOR);
      inner.style.transform = interactive ? `scale(${HOVER_SCALE})` : "scale(1)";
    };

    const onLeaveWindow = () => {
      ring.style.opacity = "0";
      hasPosition = false;
      stop();
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0"
      style={{
        width: RING_SIZE,
        height: RING_SIZE,
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 200ms ease",
        willChange: "transform",
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          border: "1px solid color-mix(in srgb, var(--primary) 55%, transparent)",
          transform: "scale(1)",
          transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
