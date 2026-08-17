import styles from "./schedule.module.css";
import type { ScheduleItem } from "@/app/types/schedule";
import { getDayOfWeek } from "@/app/lib/schedules/getSchedules";
import ScheduleEmptyState from "./ScheduleEmptyState";

interface Props {
  items: ScheduleItem[];
  showMoreHref?: string;
}

export default function UpcomingScheduleList({ items, showMoreHref = "/schedule" }: Props) {
  if (items.length === 0) return <ScheduleEmptyState />;

  return (
    <>
      <div className={styles.upcomingList}>
        {items.map((item) => {
          const [, m, d] = item.date.split("-");
          const dow = getDayOfWeek(item.date);
          return (
            <a key={item.id} href={`/schedule#${item.id}`} className={styles.upcomingItem}>
              <div className={styles.upcomingDate}>
                <span className={styles.upcomingDateMonth}>{Number(m)}月</span>
                <span className={styles.upcomingDateNum}>{Number(d)}</span>
                <span className={styles.upcomingDateDay}>{dow}</span>
              </div>
              <div className={styles.upcomingBody}>
                <span className={styles.upcomingCat}>{item.category}</span>
                <span className={styles.upcomingTitle}>{item.title}</span>
                <span className={styles.upcomingMeta}>
                  {item.startTime}{item.endTime ? ` – ${item.endTime}` : ""} ・ {item.venue}
                </span>
              </div>
              <span className={styles.upcomingArrow} aria-hidden="true">›</span>
            </a>
          );
        })}
      </div>
      <div style={{ textAlign: "right", marginBottom: "8px" }}>
        <a href={showMoreHref} style={{ fontSize: "0.82rem", fontWeight: 700, color: "#B50918" }}>
          一覧を見る →
        </a>
      </div>
    </>
  );
}
