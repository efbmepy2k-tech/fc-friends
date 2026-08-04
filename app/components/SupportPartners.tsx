"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { partners } from "@/app/data/partners";
import type { Partner } from "@/app/types/partner";
import styles from "./SupportPartners.module.css";

const PARTNERS_PAGE_URL = "/partners";

function BannerItem({ partner, index }: { partner: Partner; index: number }) {
  const ref = useRef<HTMLAnchorElement | HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const cls = `${styles.bannerItem}${visible ? ` ${styles.visible}` : ""}`;

  const img = imgErr ? (
    <div className={styles.bannerFallback}>{partner.alt}</div>
  ) : (
    <Image
      src={partner.banner}
      alt={partner.alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.bannerImg}
      onError={() => setImgErr(true)}
    />
  );

  if (partner.website) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={`${partner.alt}の公式サイトを開く`}
      >
        {img}
      </a>
    );
  }

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cls}>
      {img}
    </div>
  );
}

export default function SupportPartners() {
  const sorted = [...partners].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className={styles.section} aria-labelledby="support-partners-heading">
      <div className={styles.heading}>
        <span className={styles.overline}>SUPPORT PARTNERS</span>
        <h2 id="support-partners-heading" className={styles.title}>
          地域企業とともに
        </h2>
      </div>

      <div className={styles.grid}>
        {sorted.map((p, i) => (
          <BannerItem key={p.id} partner={p} index={i} />
        ))}
      </div>

      <div className={styles.ctaRow}>
        <a href={PARTNERS_PAGE_URL} className={styles.ctaButton}>
          すべてのパートナーを見る
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

