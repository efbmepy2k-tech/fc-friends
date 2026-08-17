import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FC.FRIENDS キッズカテゴリー｜年中・年長",
  description:
    "FC.FRIENDSのキッズカテゴリー（年中・年長）ページです。遊びを通じてサッカーの楽しさを育む活動内容をご紹介します。",
};

const themes = ["楽しむ", "ボールに慣れる", "仲間と遊ぶ"];
const activities = ["ボール遊び", "ドリブル", "シュート", "コーディネーション", "ミニゲーム"];

export default function KidsPage() {
  return (
    <main className={styles.page}>
      {/* Hero image */}
      <div className={styles.heroWrap}>
        <Image
          src="/images/team-kids.jpg"
          alt="キッズカテゴリーの練習風景"
          fill
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.badge}>KIDS</span>
          <h1 className={styles.heroTitle}>キッズカテゴリー</h1>
          <p className={styles.heroSub}>年中・年長 ／ 幼稚園児対象</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Lead */}
        <section className={styles.section}>
          <p className={styles.lead}>
            遊びの中でボールに触れ、<br />
            サッカーの楽しさや仲間と活動する喜びを育てます。
          </p>
        </section>

        {/* Basic info */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>基本情報</h2>
          <dl className={styles.infoList}>
            <div className={styles.infoRow}>
              <dt>対象</dt>
              <dd>幼稚園 年中・年長</dd>
            </div>
            <div className={styles.infoRow}>
              <dt>活動目安</dt>
              <dd>週1回</dd>
            </div>
          </dl>
        </section>

        {/* Themes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>育成テーマ</h2>
          <div className={styles.tags}>
            {themes.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>活動内容</h2>
          <ul className={styles.activityList}>
            {activities.map((a) => (
              <li key={a} className={styles.activityItem}>{a}</li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <section className={styles.section}>
          <div className={styles.navLinks}>
            <a href="/categories/junior" className={styles.navLinkSub}>
              ジュニアを見る →
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
