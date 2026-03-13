# 🎵 Netease Music Widget

Show your [NetEase Cloud Music](https://music.163.com/) listening history on your GitHub profile README.

在你的 GitHub 个人主页展示[网易云音乐](https://music.163.com/)听歌记录。

[English](#english) | [中文](#中文)

---

## Demo

![Dark Theme](https://netease-music-widget.vercel.app/api?id=32953014&type=week&count=5&theme=dark)

![Light Theme](https://netease-music-widget.vercel.app/api?id=32953014&type=week&count=5&theme=light)

### Themes / 主题预览

| Dark Themes | Light Themes |
|:-----------:|:------------:|
| `dark` — GitHub Dark | `light` — GitHub Light |
| ![dark](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=dark) | ![light](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=light) |
| `nord` — Nord | `sakura` — Sakura |
| ![nord](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=nord) | ![sakura](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=sakura) |
| `dracula` — Dracula | `mint` — Mint |
| ![dracula](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=dracula) | ![mint](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=mint) |
| `monokai` — Monokai | `sunset` — Sunset |
| ![monokai](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=monokai) | ![sunset](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=sunset) |
| `ocean` — Ocean | `sky` — Sky |
| ![ocean](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=ocean) | ![sky](https://netease-music-widget.vercel.app/api?id=32953014&count=3&theme=sky) |

---

<a id="english"></a>

## English

### Quick Start

Add this to your GitHub profile `README.md`:

```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_NETEASE_USER_ID)
```

Replace `YOUR_NETEASE_USER_ID` with your actual user ID.

### Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `id` | **Required.** Your NetEase Cloud Music user ID | — | — |
| `type` | Time range | `week` | `week`, `all` |
| `count` | Number of songs to display | `5` | `1` – `10` |
| `theme` | Card theme | `dark` | `dark`, `nord`, `dracula`, `monokai`, `ocean`, `light`, `sakura`, `mint`, `sunset`, `sky` |
| `show_rank` | Show rank numbers | `true` | `true`, `false` |

### Examples

**Default (dark theme, weekly top 5):**
```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_ID)
```

**Dracula theme, all-time top 3, no rank:**
```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_ID&type=all&count=3&theme=dracula&show_rank=false)
```

**Sakura theme, weekly top 8:**
```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=YOUR_ID&count=8&theme=sakura)
```

### How to Find Your User ID

1. Open [NetEase Cloud Music](https://music.163.com/) web or app
2. Go to your profile page
3. The number in the URL is your user ID: `music.163.com/#/user/home?id=YOUR_ID`

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HappySean2845/netease-music-widget)

> **Note:** Your NetEase Cloud Music play history must be set to **public** for this to work.

---

<a id="中文"></a>

## 中文

### 快速开始

在你的 GitHub 个人主页 `README.md` 中添加：

```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=你的网易云用户ID)
```

将 `你的网易云用户ID` 替换为你的真实用户 ID。

### 参数说明

| 参数 | 说明 | 默认值 | 可选值 |
|------|------|--------|--------|
| `id` | **必填。** 网易云音乐用户 ID | — | — |
| `type` | 时间范围 | `week` | `week`（最近一周）、`all`（所有时间） |
| `count` | 显示歌曲数量 | `5` | `1` – `10` |
| `theme` | 卡片主题 | `dark` | `dark`、`nord`、`dracula`、`monokai`、`ocean`、`light`、`sakura`、`mint`、`sunset`、`sky` |
| `show_rank` | 显示排名序号 | `true` | `true`、`false` |

### 使用示例

**默认（dark 主题，最近一周 Top 5）：**
```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=你的ID)
```

**Dracula 主题，所有时间 Top 3，不显示排名：**
```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=你的ID&type=all&count=3&theme=dracula&show_rank=false)
```

**Sakura 主题，最近一周 Top 8：**
```markdown
![Netease Music](https://netease-music-widget.vercel.app/api?id=你的ID&count=8&theme=sakura)
```

### 如何找到你的用户 ID

1. 打开[网易云音乐](https://music.163.com/)网页版或 App
2. 进入你的个人主页
3. URL 中的数字就是你的用户 ID：`music.163.com/#/user/home?id=你的ID`

### 自行部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HappySean2845/netease-music-widget)

> **注意：** 你的网易云音乐听歌排行需要设置为**公开**才能正常使用。

---

## License

MIT
