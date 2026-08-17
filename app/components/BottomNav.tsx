"use client";

import { usePathname } from "next/navigation";
import { House, CalendarDays, Newspaper, FilePenLine } from "lucide-react";
import styles from "./BottomNav.module.css";

const ICON_SIZE = 22;
const ICON_STROKE = 1.8;

const items = [
  {
    label: "ホーム",
    href: "/",
    icon: <House size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
    match: (p: string) => p === "/",
  },
  {
    label: "今日の予定",
    href: "/schedule",
    icon: <CalendarDays size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
    match: (p: string) => p === "/schedule" || p.startsWith("/schedule/"),
  },
  {
    label: "ニュース",
    href: "/news",
    icon: <Newspaper size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
    match: (p: string) => p === "/news" || p.startsWith("/news/"),
  },
  {
    label: "体験申込",
    href: "/trial",
    icon: <FilePenLine size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
    match: (p: string) => p === "/trial" || p.startsWith("/trial/"),
  },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="モバイル固定ナビゲーション">
      <div className={styles.inner}>
        {items.map((item) => {
          const isActive = item.match(pathname);
          return (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.item}${isActive ? ` ${styles.itemActive}` : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
