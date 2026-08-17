"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import styles from "./TeamSection.module.css";

function TeamImg({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className={styles.imageWrap}>
      {!err ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
          onError={() => setErr(true)}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #2a2a2a, #600010)",
            display: "grid",
            placeItems: "center",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

const categories = [
  {
    key: "junior",
    label: "JUNIOR",
    target: "U-7〜U-12",
    img: "/images/team-junior.jpg",
    imgAlt: "ジュニアクラスの試合風景",
    desc: "基礎から戦術まで、成長段階に合わせて学ぶカテゴリー",
    href: "/categories/junior",
  },
  {
    key: "kids",
    label: "KIDS",
    target: "年中・年長",
    img: "/images/team-kids.jpg",
    imgAlt: "キッズクラスの練習風景",
    desc: "サッカーを楽しみながら、ボールや仲間に親しむカテゴリー",
    href: "/categories/kids",
  },
] as const;

export default function TeamSection() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.overline}>カテゴリー紹介</p>
        <h2 className={styles.title}>TEAM CATEGORIES</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <article key={cat.key} className={styles.card}>
            <TeamImg src={cat.img} alt={cat.imgAlt} />
            <div className={styles.body}>
              <div className={styles.categoryBadge}>
                <span className={styles.categoryLabel}>{cat.label}</span>
                <span className={styles.categoryTarget}>{cat.target}</span>
              </div>
              <p className={styles.description}>{cat.desc}</p>
              <a href={cat.href} className={styles.cta}>
                詳しく見る
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
