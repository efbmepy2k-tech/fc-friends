"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../page.module.css";

function NewsThumb({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className={styles.newsThumb}>
      {!err ? (
        <Image src={src} alt={alt} fill sizes="80px" className={styles.newsThumbImg} onError={() => setErr(true)} />
      ) : (
        <div style={{ width: "100%", height: "100%", background: "#e8e4e0", display: "grid", placeItems: "center" }}>
          <span style={{ fontSize: "1.2rem" }}>📰</span>
        </div>
      )}
    </div>
  );
}

const newsItems = [
  {
    id: "1",
    date: "2025.07.18",
    category: "U-10",
    title: "U-10トレーニングマッチの結果",
    thumb: "/images/news-1.jpg",
  },
  {
    id: "2",
    date: "2025.07.15",
    category: "全体",
    title: "夏季合宿のお知らせ",
    thumb: "/images/news-2.jpg",
  },
  {
    id: "3",
    date: "2025.07.10",
    category: "U-12",
    title: "市民大会 準優勝！",
    thumb: "/images/news-3.jpg",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className={styles.section}>
      <div className={styles.newsMobileHeader}>
        <div className={styles.newsTitleGroup}>
          <span className={styles.newsLabelBold}>NEWS</span>
          <span className={styles.newsLabelSub}>お知らせ・活動報告</span>
        </div>
        <a href="#" className={styles.moreLinkRed}>もっと見る &rsaquo;</a>
      </div>

      {/* Desktop grid */}
      <div className={styles.newsGridDesktop}>
        {newsItems.map((item) => (
          <article key={item.id} className={styles.newsCardDesktop}>
            <div className={styles.newsCardMeta}>
              <time className={styles.newsDate}>{item.date}</time>
              <span className={styles.newsCategory}>{item.category}</span>
            </div>
            <h3 className={styles.newsTitle}>{item.title}</h3>
          </article>
        ))}
      </div>

      {/* Mobile list */}
      <div className={styles.newsMobileList}>
        {newsItems.map((item, idx) => (
          <a key={item.id} href="#" className={styles.newsListItem}>
            <NewsThumb src={item.thumb} alt={item.title} />
            <div className={styles.newsListBody}>
              <div className={styles.newsListMeta}>
                <time className={styles.newsDate}>{item.date}</time>
                <span className={styles.newsCategory}>{item.category}</span>
              </div>
              <p className={styles.newsListTitle}>{item.title}</p>
            </div>
            <span className={styles.newsArrow} aria-hidden="true">›</span>
            {idx < newsItems.length - 1 && <span className={styles.newsDivider} />}
          </a>
        ))}
      </div>

      <div className={styles.sectionFooter}>
        <a href="#" className={styles.linkArrow}>一覧を見る →</a>
      </div>
    </section>
  );
}
