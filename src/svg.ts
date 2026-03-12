import { Song } from "./netease";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function truncate(str: string, maxLen: number): string {
  return str.length > maxLen ? str.slice(0, maxLen - 1) + "…" : str;
}

function renderSongRow(
  song: Song,
  index: number,
  coverBase64: string,
  showIndex: boolean
): string {
  const y = index * 72;
  const animDelay = index * 0.15;

  return `
    <g transform="translate(0, ${y})" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="${animDelay}s" fill="freeze"/>

      ${
        coverBase64
          ? `<clipPath id="clip-${index}">
              <rect x="0" y="4" width="56" height="56" rx="8"/>
            </clipPath>
            <image
              href="${coverBase64}"
              x="0" y="4" width="56" height="56"
              clip-path="url(#clip-${index})"
              preserveAspectRatio="xMidYMid slice"
            />`
          : `<rect x="0" y="4" width="56" height="56" rx="8" fill="#2d333b"/>`
      }

      <g transform="translate(68, 0)">
        ${showIndex ? `<text y="18" fill="#8b949e" font-size="11" font-family="'Segoe UI', Ubuntu, sans-serif">#${index + 1}</text>` : ""}
        <text y="${showIndex ? 36 : 24}" fill="#e6edf3" font-size="14" font-weight="600" font-family="'Segoe UI', Ubuntu, sans-serif">
          ${escapeXml(truncate(song.name, 30))}
        </text>
        <text y="${showIndex ? 54 : 44}" fill="#8b949e" font-size="12" font-family="'Segoe UI', Ubuntu, sans-serif">
          ${escapeXml(truncate(song.artist, 36))}
        </text>
      </g>

      <g transform="translate(410, 28)">
        <text fill="#58a6ff" font-size="12" font-family="'Segoe UI', Ubuntu, sans-serif" text-anchor="end">
          ${song.playCount > 0 ? `${song.playCount} plays` : ""}
        </text>
      </g>
    </g>
  `;
}

export interface RenderOptions {
  songs: Song[];
  coverImages: string[];
  nickname: string;
  type: "week" | "all";
  showRank: boolean;
  theme: "dark" | "light";
}

export function renderCard(options: RenderOptions): string {
  const { songs, coverImages, nickname, type, showRank, theme } = options;
  const count = songs.length;
  const cardHeight = count * 72 + 80;

  const isDark = theme === "dark";
  const bg = isDark ? "#0d1117" : "#ffffff";
  const border = isDark ? "#30363d" : "#d0d7de";
  const titleColor = isDark ? "#e6edf3" : "#1f2328";
  const subtitleColor = isDark ? "#8b949e" : "#656d76";
  const iconColor = isDark ? "#f44336" : "#e53935";

  const periodLabel = type === "week" ? "Last 7 Days" : "All Time";
  const title = nickname
    ? `${escapeXml(nickname)}'s Recent Plays`
    : "Recent Plays";

  const songRows = songs
    .map((song, i) => renderSongRow(song, i, coverImages[i], showRank))
    .join("");

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="460" height="${cardHeight}" viewBox="0 0 460 ${cardHeight}" fill="none">
  <rect x="0.5" y="0.5" width="459" height="${cardHeight - 1}" rx="6" fill="${bg}" stroke="${border}"/>

  <g transform="translate(20, 20)">
    <!-- Title -->
    <g>
      <svg x="0" y="0" width="18" height="18" viewBox="0 0 24 24" fill="${iconColor}">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
      <text x="24" y="14" fill="${titleColor}" font-size="15" font-weight="700" font-family="'Segoe UI', Ubuntu, sans-serif">
        ${title}
      </text>
      <text x="420" y="14" fill="${subtitleColor}" font-size="11" font-family="'Segoe UI', Ubuntu, sans-serif" text-anchor="end">
        ${periodLabel}
      </text>
    </g>

    <!-- Songs -->
    <g transform="translate(0, 40)">
      ${songRows}
    </g>
  </g>
</svg>
  `.trim();
}
