<div align="center">

# 🎵 Netease Music Widget

Show your [NetEase Cloud Music](https://music.163.com/) listening history on your GitHub profile README

English | [简体中文](./README.md)

<img src="https://netease-music-widget.vercel.app/api?id=1455444028&type=week&count=5&theme=dark" alt="demo" />

</div>

## Quick Start

Add this to your GitHub profile `README.md`:

```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_NETEASE_USER_ID)
```

## Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `id` | **Required.** Your NetEase Cloud Music user ID | — | — |
| `type` | Time range | `week` | `week`, `all` |
| `count` | Number of songs to display | `5` | `1` – `10` |
| `theme` | Card theme | `dark` | See themes below |
| `show_rank` | Show rank numbers | `true` | `true`, `false` |

## Examples

```markdown
<!-- Default: dark theme, weekly top 5 -->
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_ID)

<!-- Dracula theme, all-time top 3, no rank -->
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_ID&type=all&count=3&theme=dracula&show_rank=false)
```

## Themes

10 built-in themes: 5 dark + 5 light.

### Dark Themes

| `dark` | `nord` | `dracula` |
|:------:|:------:|:---------:|
| <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=dark" width="300" /> | <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=nord" width="300" /> | <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=dracula" width="300" /> |

| `monokai` | `ocean` |
|:---------:|:-------:|
| <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=monokai" width="300" /> | <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=ocean" width="300" /> |

### Light Themes

| `light` | `sakura` | `mint` |
|:-------:|:--------:|:------:|
| <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=light" width="300" /> | <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=sakura" width="300" /> | <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=mint" width="300" /> |

| `sunset` | `sky` |
|:--------:|:-----:|
| <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=sunset" width="300" /> | <img src="https://netease-music-widget.vercel.app/api?id=1455444028&count=3&theme=sky" width="300" /> |

## How to Find Your User ID

1. Open [NetEase Cloud Music](https://music.163.com/) web or app
2. Go to your profile page
3. The number in the URL is your user ID: `music.163.com/#/user/home?id=YOUR_ID`

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HappySean2845/netease-music-widget)

> **Note:** Your NetEase Cloud Music play history must be set to **public** for this to work.

## License

MIT
