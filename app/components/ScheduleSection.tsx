"use client";

import { useMemo, useState } from "react";
import { scheduleData } from "@/app/data/schedules";
import type { ScheduleFilterCategory } from "@/app/types/schedule";
import { getTodaySchedules, getUpcomingSchedules } from "@/app/lib/schedules/getSchedules";
import ScheduleCategoryFilter from "./schedule/ScheduleCategoryFilter";
import ScheduleTodayCard from "./schedule/ScheduleTodayCard";
import UpcomingScheduleList from "./schedule/UpcomingScheduleList";
import ScheduleEmptyState from "./schedule/ScheduleEmptyState";
import CalendarLinkButton from "./schedule/CalendarLinkButton";
import styles from "./schedule/schedule.module.css";
import pageStyles from "../page.module.css";

export default function ScheduleSection() {
  const [category, setCategory] = useState<ScheduleFilterCategory>("U-12");

  const todayItems = useMemo(() => getTodaySchedules(scheduleData, category), [category]);
  const upcomingItems = useMemo(() => getUpcomingSchedules(scheduleData, category, 6), [category]);

  return (
    <section id="schedule" className={pageStyles.section}>
      <div className={pageStyles.sectionHeading} style={{ marginBottom: 16 }}>
        <p className={pageStyles.sectionOverline}>本日の予定</p>
        <h2 className={pageStyles.sectionHeadingLarge}>TODAY</h2>
      </div>

      <ScheduleCategoryFilter selected={category} onChange={setCategory} />

      {todayItems.length > 0 ? (
        todayItems.map((item) => <ScheduleTodayCard key={item.id} item={item} />)
      ) : (
        <ScheduleEmptyState />
      )}

      <div className={styles.sectionRow} style={{ marginTop: 32 }}>
        <div>
          <span className={styles.sectionLabel}>今後の予定</span>
        </div>
        <a href="/schedule" className={styles.moreLink}>もっと見る ›</a>
      </div>

      <UpcomingScheduleList items={upcomingItems} showMoreHref="/schedule" />
      <CalendarLinkButton />
    </section>
  );
}
