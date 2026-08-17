"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { scheduleData } from "@/app/data/schedules";
import type { ScheduleFilterCategory } from "@/app/types/schedule";
import { formatDateJa, getDayOfWeek, getDaySchedules, getMonthSchedules, getTodayDate } from "@/app/lib/schedules/getSchedules";
import ScheduleCategoryFilter from "./ScheduleCategoryFilter";
import ScheduleEmptyState from "./ScheduleEmptyState";
import styles from "./schedule.module.css";

function buildCalendarCells(year: number, month: number) {
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0);
  const startWeekday = first.getDay();
  const daysInMonth = last.getDate();
  const cells: Array<number | null> = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function MonthlyCalendar() {
  const today = new Date();
  const [category, setCategory] = useState<ScheduleFilterCategory>("U-12");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(getTodayDate());

  const monthItems = useMemo(
    () => getMonthSchedules(scheduleData, year, month, category),
    [year, month, category]
  );

  const dayItems = useMemo(
    () => getDaySchedules(scheduleData, selectedDate, category),
    [selectedDate, category]
  );

  const cells = useMemo(() => buildCalendarCells(year, month), [year, month]);
  const todayStr = getTodayDate();

  const itemCountForDate = (date: string) => monthItems.filter((s) => s.date === date).length;

  const moveMonth = (delta: number) => {
    const next = new Date(year, month - 1 + delta, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth() + 1);
  };

  const goToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setSelectedDate(todayStr);
  };

  return (
    <div className={styles.calPage}>
      <div className={styles.calHeader}>
        <div className={styles.calHeaderTitle}>カレンダーで予定を確認する</div>
        <ScheduleCategoryFilter selected={category} onChange={setCategory} />
        <div className={styles.calNavRow}>
          <button
            type="button"
            className={styles.calNavBtn}
            onClick={() => moveMonth(-1)}
            aria-label="前月へ"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <div className={styles.calMonthLabel}>{year}年 {month}月</div>
          <button
            type="button"
            className={styles.calNavBtn}
            onClick={() => moveMonth(1)}
            aria-label="次月へ"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="button" className={styles.calTodayBtn} onClick={goToday}>
            今月へ戻る
          </button>
        </div>
      </div>

      <div className={styles.calBody}>
        <div className={styles.calWeekHeader}>
          {['日','月','火','水','木','金','土'].map((d) => (
            <div key={d} className={styles.calWeekLabel}>{d}</div>
          ))}
        </div>

        <div className={styles.calGrid}>
          {cells.map((day, idx) => {
            if (!day) return <div key={idx} className={`${styles.calDayCell} ${styles.calDayCellEmpty}`} />;
            const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const count = itemCountForDate(dateStr);
            const dow = new Date(year, month - 1, day).getDay();
            const isToday = dateStr === todayStr;
            const isSelected = dateStr === selectedDate;
            return (
              <button
                key={dateStr}
                type="button"
                className={`${styles.calDayCell}${isToday ? ` ${styles.calDayCellToday}` : ''}${isSelected ? ` ${styles.calDayCellSelected}` : ''}`}
                onClick={() => setSelectedDate(dateStr)}
                aria-label={`${formatDateJa(dateStr)} ${getDayOfWeek(dateStr)}曜日の予定を表示`}
              >
                <span className={`${styles.calDayNum}${dow === 0 ? ` ${styles.calDayNumSun}` : ''}${dow === 6 ? ` ${styles.calDayNumSat}` : ''}`}>{day}</span>
                {count > 0 && (
                  <span className={styles.calDayDots} aria-hidden="true">
                    {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                      <span key={i} className={styles.calDayDot} />
                    ))}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className={styles.calDayDetail}>
          <div className={styles.calDayDetailTitle}>
            {formatDateJa(selectedDate)}（{getDayOfWeek(selectedDate)}）の予定
          </div>
          {dayItems.length === 0 ? (
            <ScheduleEmptyState />
          ) : (
            <div className={styles.upcomingList}>
              {dayItems.map((item) => (
                <a key={item.id} href={`/schedule#${item.id}`} className={styles.upcomingItem}>
                  <div className={styles.upcomingBody}>
                    <span className={styles.upcomingCat}>{item.category}</span>
                    <span className={styles.upcomingTitle}>{item.title}</span>
                    <span className={styles.upcomingMeta}>
                      {item.startTime}{item.endTime ? ` – ${item.endTime}` : ""} ・ {item.venue}
                    </span>
                  </div>
                  <span className={styles.upcomingArrow} aria-hidden="true">›</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
