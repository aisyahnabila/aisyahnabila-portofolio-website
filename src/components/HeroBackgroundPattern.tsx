/**
 * Subtle tiled backdrop built from actual BPMN and ERD notation
 * (start event -> task -> gateway -> end event; two entities with a
 * crow's-foot relationship) instead of generic floating stock icons.
 */
export function HeroBackgroundPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ color: 'var(--foreground)', opacity: 0.06 }}
    >
      <defs>
        <pattern id="bpmn-erd-pattern" width="240" height="200" patternUnits="userSpaceOnUse">
          {/* BPMN strip: start event -> task -> gateway -> end event */}
          <circle cx="24" cy="34" r="8" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <path d="M32 34 H58" stroke="currentColor" strokeWidth="1" markerEnd="url(#hero-arrow)" />
          <rect x="58" y="20" width="52" height="28" rx="5" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <path d="M110 34 H140" stroke="currentColor" strokeWidth="1" markerEnd="url(#hero-arrow)" />
          <rect
            x="140"
            y="14"
            width="28"
            height="28"
            transform="rotate(45 154 34)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path d="M172 34 H198" stroke="currentColor" strokeWidth="1" markerEnd="url(#hero-arrow)" />
          <circle cx="206" cy="34" r="8" fill="none" stroke="currentColor" strokeWidth="1.75" />

          {/* ERD strip: two entities joined by a crow's-foot relation */}
          <rect x="18" y="120" width="66" height="38" rx="2" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <line x1="18" y1="133" x2="84" y2="133" stroke="currentColor" strokeWidth="1" />
          <rect x="156" y="120" width="66" height="38" rx="2" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <line x1="156" y1="133" x2="222" y2="133" stroke="currentColor" strokeWidth="1" />
          <path d="M84 139 H156" stroke="currentColor" strokeWidth="1" />
          <path d="M90 133 L90 145 M90 139 L100 133 M90 139 L100 145" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="148" y1="133" x2="148" y2="145" stroke="currentColor" strokeWidth="1" />
        </pattern>

        <marker id="hero-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor" />
        </marker>
      </defs>

      <rect width="100%" height="100%" fill="url(#bpmn-erd-pattern)" />
    </svg>
  );
}
