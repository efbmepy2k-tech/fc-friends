"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const menuItems = [
  { label: "ニュース", href: "#news" },
  { label: "スケジュール", href: "#schedule" },
  { label: "チーム", href: "#team" },
  { label: "クラブ紹介", href: "#club-intro" },
  { label: "体験参加", href: "#join" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Team logo */}
        <div className={styles.logoWrap}>
          <Image
            src="/images/team-logo.png"
            alt="FC.FRIENDS チームロゴ"
            width={56}
            height={56}
            priority
            className={styles.logoImg}
          />
        </div>

        {/* Club name */}
        <div className={styles.brand}>
          <p className={styles.brandName}>FC.FRIENDS</p>
          <p className={styles.brandSince}>SINCE 2008</p>
        </div>

        {/* Desktop navigation */}
        <nav className={styles.navDesktop} aria-label="グローバルナビゲーション">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      {open && (
        <nav className={styles.navMobile} aria-label="モバイルナビゲーション">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navMobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

