import styles from "./Footer.module.css";

const CONTACT_URL = "/contact";

const navItems = [
  { label: "ニュース", href: "#news" },
  { label: "スケジュール", href: "#schedule" },
  { label: "チーム", href: "#team" },
  { label: "クラブ紹介", href: "#club-intro" },
  { label: "お問い合わせ", href: CONTACT_URL },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand / region */}
        <div className={styles.brandCol}>
          <p className={styles.brandName}>FC.FRIENDS</p>
          <p className={styles.brandTagline}>千葉県大網白里市を拠点に活動する少年サッカークラブ</p>
          <p className={styles.regionLabel}>活動地域</p>
          <p className={styles.regionText}>千葉県大網白里市周辺</p>
        </div>

        {/* Navigation */}
        <nav className={styles.navCol} aria-label="フッターナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className={styles.contactCol}>
          <p className={styles.contactLabel}>お問い合わせ</p>
          <p className={styles.contactSub}>
            体験参加・練習試合・その他お問い合わせ
          </p>
          <a href={CONTACT_URL} className={styles.contactBtn}>
            お問い合わせ
          </a>
        </div>

        {/* Copyright */}
        <div className={styles.copyCol}>
          <p className={styles.copyright}>&copy; 2008 FC.FRIENDS</p>
        </div>

      </div>
    </footer>
  );
}
