/**
 * Mock Instagram posts.
 * 将来的にはInstagram Graph APIのレスポンスをそのまま差し替え可能な形式。
 *
 * API実装例:
 *   const res = await fetch(
 *     `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${TOKEN}`
 *   );
 *   const { data }: { data: InstagramPost[] } = await res.json();
 */
import type { InstagramPost } from "@/app/types/instagram";

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/";

export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    imageUrl: "/images/gallery-1.jpg",
    caption: "今日のトレーニング！みんな元気いっぱいでした⚽ #FCFriends #少年サッカー #大網白里",
    permalink: INSTAGRAM_PROFILE_URL,
    mediaType: "IMAGE",
    publishedAt: "2026-07-20T09:00:00+09:00",
  },
  {
    id: "2",
    imageUrl: "/images/gallery-2.jpg",
    caption: "市民大会の様子。チーム一丸で戦いました！ #FCFriends #試合 #全力プレー",
    permalink: INSTAGRAM_PROFILE_URL,
    mediaType: "IMAGE",
    publishedAt: "2026-07-18T14:30:00+09:00",
  },
  {
    id: "3",
    imageUrl: "/images/gallery-3.jpg",
    caption: "体験練習会に来てくれたみんな、ありがとう！ #FCFriends #体験参加 #仲間",
    permalink: INSTAGRAM_PROFILE_URL,
    mediaType: "IMAGE",
    publishedAt: "2026-07-13T10:00:00+09:00",
  },
  {
    id: "4",
    imageUrl: "/images/gallery-4.jpg",
    caption: "U-12トレーニングマッチ。試合経験を積んでいます💪 #FCFriends #U12 #育成",
    permalink: INSTAGRAM_PROFILE_URL,
    mediaType: "IMAGE",
    publishedAt: "2026-07-06T11:00:00+09:00",
  },
  {
    id: "5",
    imageUrl: "/images/gallery-5.jpg",
    caption: "夏季合宿1日目！たくさん練習して、たくさん遊ぼう⛺ #FCFriends #合宿 #夏",
    permalink: INSTAGRAM_PROFILE_URL,
    mediaType: "IMAGE",
    publishedAt: "2026-07-01T18:00:00+09:00",
  },
  {
    id: "6",
    imageUrl: "/images/gallery-6.jpg",
    caption: "キッズクラスの練習風景🌟 はじめてのサッカーを楽しんでいます #FCFriends #キッズ",
    permalink: INSTAGRAM_PROFILE_URL,
    mediaType: "IMAGE",
    publishedAt: "2026-06-28T09:30:00+09:00",
  },
];
