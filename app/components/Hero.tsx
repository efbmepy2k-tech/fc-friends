import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroOverlay} aria-hidden="true" />

      {/* Desktop layout — bottom-left */}
      <div className={styles.heroDesktopContent}>
        <p className={styles.heroLabel}>FC.FRIENDS</p>
        <h1 className={styles.heroTitle}>
          未来のピッチで、<br />仲間とともに成長する。
        </h1>
        <p className={styles.heroSubtitle}>大網白里市の少年サッカークラブ</p>
        <div className={styles.heroActions}>
          <a className={styles.buttonPrimary} href="#join">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            体験申し込み
          </a>
          <a className={styles.buttonSecondaryHero} href="#club-intro">クラブについて</a>
        </div>
        <div className={styles.heroSlideIndicator} aria-hidden="true">
          <span className={styles.heroDotActive} />
          <span className={styles.heroDot} />
          <span className={styles.heroDot} />
        </div>
      </div>

      {/* Mobile layout — bottom-left */}
      <div className={styles.heroMobileContent}>
        <h1 className={styles.heroMobileTitle}>
          仲間とともに、<br />未来のゴールへ。
        </h1>
        <div className={styles.heroMobileMeta}>
          <p className={styles.heroMobileClub}>FC.FRIENDS</p>
          <p className={styles.heroMobileArea}>千葉県八街市の少年サッカークラブ</p>
        </div>
        <div className={styles.heroMobileButtons}>
          <a className={styles.heroMobileBtnSchedule} href="#schedule">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            今日の予定
          </a>
          <a className={styles.heroMobileBtnJoin} href="#join">体験練習に申し込む</a>
        </div>
        <div className={styles.heroSlideIndicator} aria-hidden="true">
          <span className={styles.heroDotActive} />
          <span className={styles.heroDot} />
          <span className={styles.heroDot} />
        </div>
      </div>
    </section>
  );
}
