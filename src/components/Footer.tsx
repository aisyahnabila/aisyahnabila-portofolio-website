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
    <footer className="bg-card border-t py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground text-center sm:text-left">
          Aisyah Nabila / Available for remote work / Sidoarjo, INA.
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
