/**
 * スケジュールデータ取得ライブラリ
 *
 * 現在はローカルの schedules.ts から読み込んでいます。
 * 将来的に以下へ差し替え可能です：
 *   - Google Calendar API
 *   - WordPress REST API
 *   - 外部 CMS / JSON API
 *
 * この関数のシグネチャを変えずに実装を差し替えるだけで
 * コンポーネント側は変更不要です。
 */
import { scheduleData } from "@/app/data/schedules";
import type { ScheduleItem, ScheduleFilterCategory } from "@/app/types/schedule";

/** YYYY-MM-DD 形式で今日の日付を返す */
export function getTodayDate(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** 全予定を取得（将来は API 呼び出しに差し替え） */
export async function getSchedules(): Promise<ScheduleItem[]> {
  // TODO: replace with API call, e.g.:
  // const res = await fetch("/api/schedules");
  // return res.json();
  return scheduleData;
}

/** 今日の予定 */
export function getTodaySchedules(
  items: ScheduleItem[],
  category: ScheduleFilterCategory
): ScheduleItem[] {
  const today = getTodayDate();
  return items
    .filter((s) => s.date === today && (category === "ALL" || s.category === category))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
}

/** 今後の予定（今日より後） */
export function getUpcomingSchedules(
  items: ScheduleItem[],
  category: ScheduleFilterCategory,
  limit = 8
): ScheduleItem[] {
  const today = getTodayDate();
  return items
    .filter((s) => s.date > today && (category === "ALL" || s.category === category))
    .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime))
    .slice(0, limit);
}

/** 特定月の予定（カレンダー用） */
export function getMonthSchedules(
  items: ScheduleItem[],
  year: number,
  month: number, // 1-12
  category: ScheduleFilterCategory
): ScheduleItem[] {
  const mm = String(month).padStart(2, "0");
  const prefix = `${year}-${mm}`;
  return items
    .filter((s) => s.date.startsWith(prefix) && (category === "ALL" || s.category === category))
    .sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime));
}

/** 特定日の予定 */
export function getDaySchedules(
  items: ScheduleItem[],
  date: string,
  category: ScheduleFilterCategory
): ScheduleItem[] {
  return items
    .filter((s) => s.date === date && (category === "ALL" || s.category === category))
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
}

/** 曜日文字列 */
export function getDayOfWeek(dateStr: string): string {
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  return days[new Date(dateStr + "T00:00:00").getDay()];
}

/** "2026-08-05" → "8月5日" */
export function formatDateJa(dateStr: string): string {
  const [, m, d] = dateStr.split("-");
  return `${Number(m)}月${Number(d)}日`;
}
