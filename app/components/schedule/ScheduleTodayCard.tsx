import styles from "./schedule.module.css";
import type { ScheduleItem } from "@/app/types/schedule";
import { formatDateJa, getDayOfWeek } from "@/app/lib/schedules/getSchedules";

interface Props {
  item: ScheduleItem;
}

export default function ScheduleTodayCard({ item }: Props) {
  return (
    <div className={styles.todayCard}>
      <div className={styles.todayCardTop}>
        <span className={styles.catBadge}>{item.category}</span>
        {item.type && <span className={styles.typeBadge}>{item.type}</span>}
        <span style={{ fontSize: "0.82rem", color: "#666" }}>
          {formatDateJa(item.date)}（{getDayOfWeek(item.date)}）
        </span>
      </div>

      <div className={styles.timeRow}>
        <span className={styles.timeMain}>{item.startTime}</span>
        {item.endTime && (
          <>
            <span className={styles.timeSep}> – </span>
            <span className={styles.timeEnd}>{item.endTime}</span>
          </>
        )}
      </div>

      <div className={styles.venueRow}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#B50918"/>
        </svg>
        {item.venue}
      </div>

      {item.note && <p className={styles.noteText}>{item.note}</p>}

      <div className={styles.cardActions}>
        {item.mapUrl && (
          <a href={item.mapUrl} className={styles.btnMap} target="_blank" rel="noopener noreferrer">
            会場マップ
          </a>
        )}
        <a href={`/schedule#${item.id}`} className={styles.btnDetail}>
          詳細を見る →
        </a>
      </div>
    </div>
  );
}
