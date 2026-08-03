"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../page.module.css";

function GalleryImg({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className={styles.galleryImageWrap} style={{ background: "#ddd", display: "grid", placeItems: "center" }}>
        <span style={{ fontSize: "0.72rem", color: "#888" }}>{alt}</span>
      </div>
    );
  }
  return (
    <div className={styles.galleryImageWrap}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 33vw" className={styles.galleryImage} onError={() => setErr(true)} />
    </div>
  );
}

const images = [
  { src: "/images/gallery-1.jpg", alt: "練習風景1" },
  { src: "/images/gallery-2.jpg", alt: "練習風景2" },
  { src: "/images/gallery-3.jpg", alt: "試合風景1" },
  { src: "/images/gallery-4.jpg", alt: "試合風景2" },
  { src: "/images/gallery-5.jpg", alt: "チーム集合写真" },
  { src: "/images/gallery-6.jpg", alt: "表彰式" },
];

export default function GallerySection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <p className={styles.sectionOverline}>クラブギャラリー</p>
        <h2 className={styles.sectionTitle}>GALLERY</h2>
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img) => (
          <div key={img.src} className={styles.galleryCard}>
            <GalleryImg src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
