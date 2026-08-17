import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FC.FRIENDS ジュニアカテゴリー｜U-7〜U-12",
  description:
    "FC.FRIENDSのジュニアカテゴリー（U-7〜U-12）ページです。学年や成長段階に合わせた指導方針をご紹介します。",
};

const steps = [
  {
    age: "U-7・U-8",
    theme: "基礎・楽しさ",
    desc: "ボール操作とサッカーを楽しむ姿勢を身につける",
  },
  {
    age: "U-9・U-10",
    theme: "個人技・判断",
    desc: "技術を磨き、自分で考えてプレーする力を育てる",
  },
  {
    age: "U-11・U-12",
    theme: "戦術・自立",
    desc: "チーム戦術を理解し、自立した選手を目指す",
  },
];

export default function JuniorPage() {
  return (
    <main className={styles.page}>
      {/* Hero image */}
      <div className={styles.heroWrap}>
        <Image
          src="/images/team-junior.jpg"
          alt="ジュニアカテゴリーの練習風景"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.badge}>JUNIOR</span>
          <h1 className={styles.heroTitle}>ジュニアカテゴリー</h1>
          <p className={styles.heroSub}>U-7〜U-12 ／ 小学1〜6年生</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Lead */}
        <section className={styles.section}>
          <p className={styles.lead}>
            学年や成長段階に合わせて、<br />
            基礎技術・判断力・戦術理解・自立心を育てます。
          </p>
        </section>

        {/* Steps */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>年代別育成方針</h2>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.age} className={styles.step}>
                <div className={styles.stepAge}>{s.age}</div>
                <div className={styles.stepBody}>
                  <p className={styles.stepTheme}>{s.theme}</p>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.navLinks}>
            <a href="/categories/kids" className={styles.navLinkSub}>
              キッズを見る →
            </a>
          </div>
          <div className={styles.ctas}>
            <a href="/trial" className={styles.ctaPrimary}>体験申込</a>
            <a href="#schedule" className={styles.ctaSecondary}>練習スケジュール</a>
            <a href="/contact" className={styles.ctaSecondary}>お問い合わせ</a>
          </div>
        </section>
      </div>
    </main>
  );
}
