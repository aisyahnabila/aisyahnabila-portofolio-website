// Vercel Edge Function — deployed automatically from /api on Vercel.
// Not reachable during local `npm run dev` (plain Vite server); Footer.tsx
// handles that gracefully by hiding the counter when the fetch fails.
export const config = { runtime: "edge" };

export default async function handler(request: Request) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return new Response(JSON.stringify({ error: "Redis not configured" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  // ?increment=false is used for repeat visits (see Footer.tsx's localStorage
  // dedup) so refreshing the page doesn't inflate the count.
  const { searchParams } = new URL(request.url);
  const shouldIncrement = searchParams.get("increment") !== "false";
  const command = shouldIncrement ? "incr/visits" : "get/visits";

  const upstashResponse = await fetch(`${redisUrl}/${command}`, {
    headers: { Authorization: `Bearer ${redisToken}` },
  });

  if (!upstashResponse.ok) {
    return new Response(JSON.stringify({ error: "Failed to reach Redis" }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }

  const data = await upstashResponse.json();
  const count = Number(data.result) || 0;

  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}
