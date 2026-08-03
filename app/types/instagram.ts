export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  permalink: string;
  mediaType: InstagramMediaType;
  publishedAt: string; // ISO 8601
}
