"use client";

import { useMemo, useState } from "react";
import { scheduleData } from "@/app/data/schedules";
import type { ScheduleFilterCategory } from "@/app/types/schedule";
import { getTodaySchedules, getUpcomingSchedules } from "@/app/lib/schedules/getSchedules";
import ScheduleCategoryFilter from "./ScheduleCategoryFilter";
import ScheduleTodayCard from "./ScheduleTodayCard";
import UpcomingScheduleList from "./UpcomingScheduleList";
import ScheduleEmptyState from "./ScheduleEmptyState";
import CalendarLinkButton from "./CalendarLinkButton";
import styles from "./schedule.module.css";

export default function SchedulePageClient() {
  const [category, setCategory] = useState<ScheduleFilterCategory>("U-12");

  const todayItems = useMemo(
    () => getTodaySchedules(scheduleData, category),
    [category]
  );
  const upcomingItems = useMemo(
    () => getUpcomingSchedules(scheduleData, category, 8),
    [category]
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeading}>
        <p className={styles.pageOverline}>今日の予定</p>
        <h1 className={styles.pageTitle}>SCHEDULE</h1>
      </div>

      <ScheduleCategoryFilter selected={category} onChange={setCategory} />

      <div className={styles.pageSection}>
        <div className={styles.sectionRow}>
          <div>
            <span className={styles.sectionLabel}>今日の予定</span>
          </div>
        </div>
        {todayItems.length > 0 ? (
          todayItems.map((item) => <ScheduleTodayCard key={item.id} item={item} />)
        ) : (
          <ScheduleEmptyState />
        )}
      </div>

      <div className={styles.pageSection}>
        <div className={styles.sectionRow}>
          <div>
            <span className={styles.sectionLabel}>今後の予定</span>
          </div>
        </div>
        <UpcomingScheduleList items={upcomingItems} showMoreHref="/schedule" />
        <CalendarLinkButton />
      </div>
    </div>
  );
}
