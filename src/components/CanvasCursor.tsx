import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useCanvasCursor } from "../hooks/useCanvasCursor";

/**
 * Decorative spring-trail cursor. Disabled entirely (no canvas mounted,
 * no listeners attached) on touch/coarse-pointer devices and when the
 * user prefers reduced motion — mirrors the hover-capability check used
 * in Hero.tsx.
 */
export function CanvasCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [supportsHover, setSupportsHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setSupportsHover(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const enabled = supportsHover && !shouldReduceMotion;

  useCanvasCursor(canvasRef, { enabled });

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    />
  );
}
