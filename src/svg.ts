import { Song } from "./netease";

interface ThemeColors {
  bg: string;
  border: string;
  titleColor: string;
  subtitleColor: string;
  iconColor: string;
  songColor: string;
  accentColor: string;
  fallbackCover: string;
}

const THEMES: Record<string, ThemeColors> = {
  // ===== Dark themes =====
  dark: {
    bg: "#0d1117",
    border: "#30363d",
    titleColor: "#e6edf3",
    subtitleColor: "#8b949e",
    iconColor: "#f44336",
    songColor: "#e6edf3",
    accentColor: "#58a6ff",
    fallbackCover: "#2d333b",
  },
  nord: {
    bg: "#2e3440",
    border: "#3b4252",
    titleColor: "#eceff4",
    subtitleColor: "#d8dee9",
    iconColor: "#bf616a",
    songColor: "#eceff4",
    accentColor: "#88c0d0",
    fallbackCover: "#3b4252",
  },
  dracula: {
    bg: "#282a36",
    border: "#44475a",
    titleColor: "#f8f8f2",
    subtitleColor: "#6272a4",
    iconColor: "#ff79c6",
    songColor: "#f8f8f2",
    accentColor: "#bd93f9",
    fallbackCover: "#44475a",
  },
  monokai: {
    bg: "#272822",
    border: "#3e3d32",
    titleColor: "#f8f8f2",
    subtitleColor: "#75715e",
    iconColor: "#f92672",
    songColor: "#f8f8f2",
    accentColor: "#a6e22e",
    fallbackCover: "#3e3d32",
  },
  ocean: {
    bg: "#0a1929",
    border: "#132f4c",
    titleColor: "#e3f2fd",
    subtitleColor: "#5090d3",
    iconColor: "#ff6b6b",
    songColor: "#e3f2fd",
    accentColor: "#66b2ff",
    fallbackCover: "#132f4c",
  },
  // ===== Light themes =====
  light: {
    bg: "#ffffff",
    border: "#d0d7de",
    titleColor: "#1f2328",
    subtitleColor: "#656d76",
    iconColor: "#e53935",
    songColor: "#1f2328",
    accentColor: "#0969da",
    fallbackCover: "#eaeef2",
  },
  sakura: {
    bg: "#fff5f5",
    border: "#fed7d7",
    titleColor: "#63171b",
    subtitleColor: "#9b2c2c",
    iconColor: "#e53e3e",
    songColor: "#63171b",
    accentColor: "#d53f8c",
    fallbackCover: "#fed7d7",
  },
  mint: {
    bg: "#f0fff4",
    border: "#c6f6d5",
    titleColor: "#1a4731",
    subtitleColor: "#276749",
    iconColor: "#38a169",
    songColor: "#1a4731",
    accentColor: "#319795",
    fallbackCover: "#c6f6d5",
  },
  sunset: {
    bg: "#fffaf0",
    border: "#feebc8",
    titleColor: "#652b19",
    subtitleColor: "#9c4221",
    iconColor: "#dd6b20",
    songColor: "#652b19",
    accentColor: "#d69e2e",
    fallbackCover: "#feebc8",
  },
  sky: {
    bg: "#f0f9ff",
    border: "#bfdbfe",
    titleColor: "#1e3a5f",
    subtitleColor: "#3b82f6",
    iconColor: "#3b82f6",
    songColor: "#1e3a5f",
    accentColor: "#2563eb",
    fallbackCover: "#bfdbfe",
  },
};

export const THEME_NAMES = Object.keys(THEMES);

export function resolveTheme(name: string): ThemeColors {
  return THEMES[name] || THEMES.dark;
}

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
  showIndex: boolean,
  colors: ThemeColors
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
          : `<rect x="0" y="4" width="56" height="56" rx="8" fill="${colors.fallbackCover}"/>`
      }

      <g transform="translate(68, 0)">
        ${showIndex ? `<text y="18" fill="${colors.subtitleColor}" font-size="11" font-family="'Segoe UI', Ubuntu, sans-serif">#${index + 1}</text>` : ""}
        <text y="${showIndex ? 36 : 24}" fill="${colors.songColor}" font-size="14" font-weight="600" font-family="'Segoe UI', Ubuntu, sans-serif">
          ${escapeXml(truncate(song.name, 30))}
        </text>
        <text y="${showIndex ? 54 : 44}" fill="${colors.subtitleColor}" font-size="12" font-family="'Segoe UI', Ubuntu, sans-serif">
          ${escapeXml(truncate(song.artist, 36))}
        </text>
      </g>

      <g transform="translate(410, 28)">
        <text fill="${colors.accentColor}" font-size="12" font-family="'Segoe UI', Ubuntu, sans-serif" text-anchor="end">
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
  theme: string;
}

export function renderCard(options: RenderOptions): string {
  const { songs, coverImages, nickname, type, showRank, theme } = options;
  const count = songs.length;
  const cardHeight = count * 72 + 80;

  const colors = resolveTheme(theme);

  const periodLabel = type === "week" ? "Last 7 Days" : "All Time";
  const title = nickname
    ? `${escapeXml(nickname)}'s Recent Plays`
    : "Recent Plays";

  const songRows = songs
    .map((song, i) => renderSongRow(song, i, coverImages[i], showRank, colors))
    .join("");

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="460" height="${cardHeight}" viewBox="0 0 460 ${cardHeight}" fill="none">
  <rect x="0.5" y="0.5" width="459" height="${cardHeight - 1}" rx="6" fill="${colors.bg}" stroke="${colors.border}"/>

  <g transform="translate(20, 20)">
    <!-- Title -->
    <g>
      <svg x="0" y="0" width="18" height="18" viewBox="0 0 24 24" fill="${colors.iconColor}">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
      <text x="24" y="14" fill="${colors.titleColor}" font-size="15" font-weight="700" font-family="'Segoe UI', Ubuntu, sans-serif">
        ${title}
      </text>
      <text x="420" y="14" fill="${colors.subtitleColor}" font-size="11" font-family="'Segoe UI', Ubuntu, sans-serif" text-anchor="end">
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
