export interface Song {
  name: string;
  artist: string;
  album: string;
  coverUrl: string;
  playCount: number;
}

export interface UserProfile {
  nickname: string;
  avatarUrl: string;
}

const NETEASE_API = "https://music.163.com/api";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: "https://music.163.com/",
  "Content-Type": "application/x-www-form-urlencoded",
};

export async function getUserRecord(
  uid: string,
  type: number = 1
): Promise<Song[]> {
  const url = `${NETEASE_API}/v1/play/record?uid=${uid}&type=${type}`;
  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();

  if (data.code !== 200) {
    throw new Error(`Netease API error: ${data.code} - ${data.message || "Unknown error"}`);
  }

  const list = type === 1 ? data.weekData : data.allData;
  if (!list || list.length === 0) {
    return [];
  }

  return list.map((item: any) => ({
    name: item.song.name,
    artist: item.song.ar.map((a: any) => a.name).join(" / "),
    album: item.song.al.name,
    coverUrl: item.song.al.picUrl,
    playCount: item.playCount,
  }));
}

export async function getUserProfile(uid: string): Promise<UserProfile> {
  const url = `${NETEASE_API}/v1/user/detail/${uid}`;
  const res = await fetch(url, { headers: HEADERS });
  const data = await res.json();

  if (data.code !== 200) {
    throw new Error(`Netease API error: ${data.code}`);
  }

  return {
    nickname: data.profile.nickname,
    avatarUrl: data.profile.avatarUrl,
  };
}

export async function imageToBase64(url: string): Promise<string> {
  try {
    const res = await fetch(url + "?param=80y80", { headers: HEADERS });
    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    return `data:image/jpeg;base64,${base64}`;
  } catch {
    return "";
  }
}
