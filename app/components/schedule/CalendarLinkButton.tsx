import { CalendarDays } from "lucide-react";
import styles from "./schedule.module.css";

export default function CalendarLinkButton() {
  return (
    <div className={styles.calBtnWrap}>
      <a href="/schedule/calendar" className={styles.calBtn}>
        <CalendarDays size={20} strokeWidth={1.8} aria-hidden="true" />
        カレンダーで予定を確認する
      </a>
    </div>
  );
}
