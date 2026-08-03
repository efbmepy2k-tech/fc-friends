"use client";

import Image from "next/image";
import { useState } from "react";
import { instagramPosts, INSTAGRAM_PROFILE_URL } from "@/app/data/instagramPosts";
import type { InstagramPost } from "@/app/types/instagram";
import styles from "./GallerySection.module.css";

// Instagram SVG icon (official glyph shape)
function InstagramIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function PostCard({ post }: { post: InstagramPost }) {
  const [err, setErr] = useState(false);

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.postLink}
      aria-label={`Instagramで見る: ${post.caption.slice(0, 40)}…`}
    >
      <div className={styles.imageWrap}>
        {!err ? (
          <Image
            src={post.imageUrl}
            alt={post.caption.slice(0, 80)}
            fill
            sizes="(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className={styles.image}
            onError={() => setErr(true)}
          />
        ) : (
          <div className={styles.fallback}>
            <InstagramIcon size={24} />
          </div>
        )}
      </div>
      <div className={styles.overlay} aria-hidden="true">
        <span className={styles.overlayIcon}>
          <InstagramIcon size={32} />
        </span>
      </div>
    </a>
  );
}

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.overline}>活動の様子</p>
        <h2 className={styles.title}>GALLERY</h2>
      </div>
      <p className={styles.description}>
        FC.FRIENDSの日々の活動や試合の様子を
        <br />
        Instagramで発信しています。
      </p>

      <div className={styles.grid}>
        {instagramPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className={styles.followRow}>
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.followButton}
        >
          <InstagramIcon size={20} />
          Instagramをフォロー
        </a>
      </div>
    </section>
  );
}
