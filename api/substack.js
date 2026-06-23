const FEED_URL = "https://brumanotes.substack.com/feed";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  try {
    const response = await fetch(FEED_URL, {
      headers: {
        "User-Agent": "Vercel-Substack-Proxy/1.0",
      },
    });

    if (!response.ok) {
      return res.status(response.status).send(`Failed to fetch feed: ${response.status}`);
    }

    const xml = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

    return res.status(200).send(xml);
  } catch (error) {
    console.error("Substack feed proxy error:", error);
    return res.status(500).json({ error: "Failed to fetch Substack feed", message: error.message });
  }
}
