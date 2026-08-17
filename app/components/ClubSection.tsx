"use client";

import { useEffect, useRef } from "react";
import { UserRoundCheck, Users, MapPin, CalendarDays } from "lucide-react";
import styles from "./ClubSection.module.css";

const cards = [
  {
    icon: <UserRoundCheck size={40} strokeWidth={1.6} />,
    title: "100名以上",
    desc: "在籍選手数",
  },
  {
    icon: <Users size={40} strokeWidth={1.6} />,
    title: "26名",
    desc: "男性・女性コーチ在籍",
  },
  {
    icon: <MapPin size={40} strokeWidth={1.6} />,
    title: "活動拠点",
    desc: "大網小学校・季美の森小学校",
  },
  {
    icon: <CalendarDays size={40} strokeWidth={1.6} />,
    title: "練習日時",
    desc: "毎週土・日曜日　9時〜12時",
  },
];

export default function ClubSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Staggered delay: each card fades in 80ms after the previous
            setTimeout(() => {
              el.classList.add(styles.visible);
            }, i * 80);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="club-intro" className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.overline}>クラブ紹介</p>
        <h2 className={styles.title}>CLUB INTRODUCTION</h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={styles.card}
          >
            <div className={styles.iconWrap} aria-hidden="true">
              {card.icon}
            </div>
            <div className={styles.textWrap}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <a href="#join" className={styles.ctaButton}>
          詳細を見る
        </a>
      </div>
    </section>
  );
}