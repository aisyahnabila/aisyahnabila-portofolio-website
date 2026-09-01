import { useEffect, type RefObject } from 'react';

interface TrailNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Trail {
  spring: number;
  friction: number;
  alpha: number;
  nodes: TrailNode[];
}

interface UseCanvasCursorOptions {
  enabled: boolean;
  trails?: number;
  nodesPerTrail?: number;
}

const DAMPENING = 0.25;
const TENSION = 0.98;
const BASE_FRICTION = 0.5;
const BASE_SPRING = 0.4;

function readPrimaryColor(): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  return value || '#3b82f6';
}

/**
 * Draws a spring-physics rope trail following the pointer on a <canvas>.
 * Pure rendering — caller decides *when* it should be enabled (reduced
 * motion, touch devices, etc.) via the `enabled` flag.
 */
export function useCanvasCursor(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  { enabled, trails = 7, nodesPerTrail = 40 }: UseCanvasCursorOptions
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!enabled || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;
    let rafId = 0;
    let strokeColor = readPrimaryColor();

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const lines: Trail[] = Array.from({ length: trails }, (_, i) => ({
      spring: BASE_SPRING + (i / trails) * 0.025 + Math.random() * 0.02 - 0.01,
      friction: BASE_FRICTION + Math.random() * 0.01 - 0.005,
      alpha: 0.5 - (i / trails) * 0.35,
      nodes: Array.from({ length: nodesPerTrail }, () => ({
        x: pointer.x,
        y: pointer.y,
        vx: 0,
        vy: 0,
      })),
    }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const onResize = () => resize();
    const onVisibilityChange = () => {
      const wasRunning = running;
      running = document.visibilityState === 'visible';
      if (running && !wasRunning) rafId = window.requestAnimationFrame(render);
    };

    const themeObserver = new MutationObserver(() => {
      strokeColor = readPrimaryColor();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    function updateTrail(trail: Trail) {
      let spring = trail.spring;
      let node = trail.nodes[0];
      node.vx += (pointer.x - node.x) * spring;
      node.vy += (pointer.y - node.y) * spring;

      for (let i = 0; i < trail.nodes.length; i++) {
        node = trail.nodes[i];
        if (i > 0) {
          const prev = trail.nodes[i - 1];
          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;
          node.vx += prev.vx * DAMPENING;
          node.vy += prev.vy * DAMPENING;
        }
        node.vx *= trail.friction;
        node.vy *= trail.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= TENSION;
      }
    }

    function drawTrail(trail: Trail) {
      const { nodes } = trail;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length - 2; i++) {
        const curr = nodes[i];
        const next = nodes[i + 1];
        const midX = (curr.x + next.x) / 2;
        const midY = (curr.y + next.y) / 2;
        ctx.quadraticCurveTo(curr.x, curr.y, midX, midY);
      }
      const secondLast = nodes[nodes.length - 2];
      const last = nodes[nodes.length - 1];
      ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
      ctx.globalAlpha = trail.alpha;
      ctx.stroke();
    }

    function render() {
      if (!running) return;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.2;

      for (const trail of lines) {
        updateTrail(trail);
        drawTrail(trail);
      }

      rafId = window.requestAnimationFrame(render);
    }

    rafId = window.requestAnimationFrame(render);

    return () => {
      running = false;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      themeObserver.disconnect();
    };
  }, [canvasRef, enabled, trails, nodesPerTrail]);
}
