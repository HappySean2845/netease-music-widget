import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUserRecord, getUserProfile, imageToBase64 } from "../src/netease";
import { renderCard, THEME_NAMES } from "../src/svg";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id, type = "week", count = "5", show_rank = "true", theme = "dark" } = req.query;

  if (!id || typeof id !== "string" || !/^\d+$/.test(id)) {
    res.status(400).send("Missing or invalid parameter: id (must be a numeric NetEase Cloud Music user ID)");
    return;
  }

  const recordType = type === "all" ? 0 : 1;
  const limit = Math.min(Math.max(parseInt(count as string, 10) || 5, 1), 10);

  try {
    const [songs, profile] = await Promise.all([
      getUserRecord(id, recordType),
      getUserProfile(id).catch(() => null),
    ]);

    if (songs.length === 0) {
      res.status(404).send("No play records found. Make sure the user's play history is public.");
      return;
    }

    const topSongs = songs.slice(0, limit);

    const coverImages = await Promise.all(
      topSongs.map((s) => imageToBase64(s.coverUrl))
    );

    const svg = renderCard({
      songs: topSongs,
      coverImages,
      nickname: profile?.nickname || "",
      type: type === "all" ? "all" : "week",
      showRank: show_rank !== "false",
      theme: THEME_NAMES.includes(theme as string) ? (theme as string) : "dark",
    });

    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.status(200).send(svg);
  } catch (err: any) {
    console.error("Error fetching data for uid:", id, err);
    res.status(500).send("Internal server error. Please try again later.");
  }
}
