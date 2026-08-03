import styles from "../page.module.css";

const navItems = [
  { label: "ニュース", href: "#news" },
  { label: "スケジュール", href: "#schedule" },
  { label: "チーム", href: "#team" },
  { label: "クラブ紹介", href: "#club-intro" },
  { label: "体験参加", href: "#join" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrandCol}>
          <p className={styles.footerBrand}>FC.FRIENDS</p>
          <p className={styles.footerTagline}>少年サッカークラブ</p>
        </div>
        <nav className={styles.footerNav} aria-label="フッターナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.footerNavLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.footerInfoCol}>
          <p className={styles.footerInfoLabel}>活動地域</p>
          <p className={styles.footerInfoText}>千葉県八街市及び周辺地域</p>
        </div>
        <div className={styles.footerInfoCol}>
          <p className={styles.footerInfoLabel}>お問い合わせ</p>
          <p className={styles.footerInfoText}>体験参加セクションよりお申し込みください</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>
          &copy; {year} FC.FRIENDS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
