import styles from "../page.module.css";

export default function JoinCTA() {
  return (
    <section className={styles.joinCtaSection}>
      <div className={styles.joinCtaBg} aria-hidden="true" />
      <div className={styles.joinCtaOverlay} aria-hidden="true" />
      <div className={styles.joinCtaContent}>
        <p className={styles.joinCtaLabel}>無料体験 受付中</p>
        <h2 className={styles.joinCtaTitle}>
          体験練習<br />受付中！
        </h2>
        <p className={styles.joinCtaText}>
          いつでも見学・体験OK。まずはお気軽にご連絡ください。
        </p>
        <a href="#contact" className={styles.joinCtaButton}>
          体験練習に申し込む
        </a>
      </div>
    </section>
  );
}
