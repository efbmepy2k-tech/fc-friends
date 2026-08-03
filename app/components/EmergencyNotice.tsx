import styles from "../page.module.css";

export default function EmergencyNotice() {
  return (
    <div className={styles.emergencyWrap}>
      <a href="#" className={styles.emergencyCard}>
        <span className={styles.emergencyIcon} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#C40018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9v4M12 17h.01" stroke="#C40018" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <div className={styles.emergencyBody}>
          <p className={styles.emergencyTitle}>緊急連絡</p>
          <p className={styles.emergencyText}>
            本日のU-10練習は雨天のため中止です。
          </p>
        </div>
        <span className={styles.emergencyArrow} aria-hidden="true">›</span>
      </a>
    </div>
  );
}
