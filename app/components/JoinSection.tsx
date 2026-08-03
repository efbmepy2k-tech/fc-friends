import styles from "../page.module.css";

export default function JoinSection() {
  return (
    <section id="join" className={styles.joinSection}>
      <div className={styles.joinInner}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionOverlineLight}>体験参加募集</p>
          <h2 className={styles.sectionTitleLight}>
            まずは、ピッチで会いましょう。
          </h2>
        </div>
        <p className={styles.joinCopy}>
          FC.FRIENDSでは、毎週新しい仲間を歓迎しています。初心者も、経験者も、見学だけでも大歓迎。まずはお気軽にご連絡ください。
        </p>
        <ul className={styles.joinList}>
          <li>初心者歓迎</li>
          <li>無料体験実施中</li>
          <li>見学のみも可能</li>
        </ul>
        <a className={styles.buttonPrimaryLarge} href="#contact">
          無料体験に申し込む
        </a>
      </div>
    </section>
  );
}
