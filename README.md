# 🎵 Netease Music README

Show your NetEase Cloud Music (网易云音乐) listening history on your GitHub profile README.

## Usage

Add this to your GitHub profile README:

```markdown
![Netease Music](https://netease-github-widget.vercel.app/api?id=YOUR_NETEASE_USER_ID)
```

## Parameters

| Parameter | Description | Default | Options |
|-----------|-------------|---------|---------|
| `id` | **Required.** Your NetEase Cloud Music user ID | - | - |
| `type` | Time range | `week` | `week`, `all` |
| `count` | Number of songs to display | `5` | `1` - `10` |
| `theme` | Card theme | `dark` | `dark`, `light` |
| `show_rank` | Show rank numbers | `true` | `true`, `false` |

## Examples

**Dark theme (default):**
```markdown
![Netease Music](https://netease-github-widget.vercel.app/api?id=YOUR_ID&type=week&count=5)
```

**Light theme, all-time top 3:**
```markdown
![Netease Music](https://netease-github-widget.vercel.app/api?id=YOUR_ID&type=all&count=3&theme=light)
```

## How to find your NetEase user ID

1. Open NetEase Cloud Music web or app
2. Go to your profile page
3. The number in the URL is your user ID: `music.163.com/#/user/home?id=YOUR_ID`

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HappySean2845/netease-github-widget)

## Note

Your NetEase Cloud Music play history must be set to **public** for this to work.

## License

MIT
