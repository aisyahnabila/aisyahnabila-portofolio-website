import { useEffect, useState } from "react";

const VISIT_FLAG_KEY = "portfolio_visit_counted";

export function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem(VISIT_FLAG_KEY) === "true";
    const endpoint = alreadyVisited ? "/api/visits?increment=false" : "/api/visits";

    fetch(endpoint)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.count === "number") {
          setVisitorCount(data.count);
          if (!alreadyVisited) {
            localStorage.setItem(VISIT_FLAG_KEY, "true");
          }
        }
      })
      .catch(() => {
        // /api/visits isn't reachable (local `vite dev`, or not yet deployed
        // on Vercel with Redis configured) — just skip showing the counter.
      });
  }, []);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__info">
          <span className="site-footer__name">Aisyah Nabila</span>
          <span className="site-footer__sep">/</span>
          <span className="site-footer__accent">Available for remote work</span>
          <span className="site-footer__sep">/</span>
          <span>Sidoarjo, INA.</span>
        </p>

        {visitorCount !== null && (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-foreground/30 px-3 py-1 text-xs text-muted-foreground">
            Visited by {visitorCount.toLocaleString()} people
          </span>
        )}
      </div>
    </footer>
  );
}
