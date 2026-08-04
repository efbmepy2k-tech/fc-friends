import styles from "../page.module.css";

type ScheduleItem = {
  id: string;
  date: string;
  dayOfWeek: string;
  type: string;
  startTime: string;
  endTime: string;
  venue: string;
  targets: string;
  items: string;
  note?: string;
  mapUrl?: string;
  googleCalendarEventId?: string;
};

const todaySchedule: ScheduleItem = {
  id: "1",
  date: "7月20日",
  dayOfWeek: "月",
  type: "通常練習",
  startTime: "9:00",
  endTime: "11:30",
  venue: "臼井小学校グラウンド",
  targets: "U-8 / U-10 / U-12",
  items: "ボール・水筒・タオル・着替え",
  note: "熱中症対策をしっかり行いましょう。",
  mapUrl: "#",
};

export default function ScheduleSection() {
  return (
    <section id="schedule" className={styles.section}>
      <div className={styles.todayHeader}>
        <div className={styles.todayHeadingGroup}>
          <span className={styles.sectionOverline}>本日の予定</span>
          <h2 className={styles.sectionHeadingLarge}>TODAY</h2>
        </div>
        <a href="/schedule" className={styles.moreLinkRed}>もっと見る &rsaquo;</a>
      </div>

      {/* Big card */}
      <div className={styles.todayCard}>
        <div className={styles.todayCardTop}>
          <div className={styles.todayDateBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#C40018" strokeWidth="2"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="#C40018" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {todaySchedule.date}（{todaySchedule.dayOfWeek}）
          </div>
          <span className={styles.todayTypeBadge}>{todaySchedule.type}</span>
        </div>

        <div className={styles.todayTimeRow}>
          <span className={styles.todayTimeNum}>{todaySchedule.startTime}</span>
          <span className={styles.todayTimeSep}> - </span>
          <span className={styles.todayTimeEnd}>{todaySchedule.endTime}</span>
        </div>

        <div className={styles.todayVenueRow}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#C40018"/>
          </svg>
          {todaySchedule.venue}
        </div>

        <dl className={styles.todayMeta}>
          <div className={styles.todayMetaRow}>
            <dt>対象</dt>
            <dd>{todaySchedule.targets}</dd>
          </div>
          <div className={styles.todayMetaRow}>
            <dt>持ち物</dt>
            <dd>{todaySchedule.items}</dd>
          </div>
        </dl>

        {todaySchedule.note && (
          <p className={styles.todayNote}>{todaySchedule.note}</p>
        )}

        <div className={styles.todayActions}>
          {todaySchedule.mapUrl && (
            <a href={todaySchedule.mapUrl} className={styles.todayBtnMap}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C40018" strokeWidth="2" fill="none"/>
              </svg>
              会場マップ
            </a>
          )}
          <a href="/schedule" className={styles.todayBtnDetail}>
            詳細を見る &rsaquo;
          </a>
        </div>
      </div>

      <div className={styles.sectionFooter}>
        <a href="/schedule" className={styles.linkArrow}>詳しい予定を見る →</a>
      </div>
    </section>
  );
}
