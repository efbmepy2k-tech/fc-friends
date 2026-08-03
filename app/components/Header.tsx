"use client";

import { useState } from "react";
import styles from "../page.module.css";

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
        {/* Emblem */}
        <div className={styles.headerEmblem}>
          <span className={styles.emblemText}>FC</span>
        </div>

        {/* Brand name */}
        <div className={styles.headerBrand}>
          <p className={styles.headerBrandName}>FC.FRIENDS</p>
          <p className={styles.headerBrandSince}>SINCE 2002</p>
        </div>

        {/* Desktop nav */}
        <nav className={styles.navDesktop} aria-label="グローバルナビゲーション">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button – red square on mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              <rect y="0" width="22" height="2.2" rx="1.1" fill="white"/>
              <rect y="6.9" width="22" height="2.2" rx="1.1" fill="white"/>
              <rect y="13.8" width="22" height="2.2" rx="1.1" fill="white"/>
            </svg>
          )}
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
