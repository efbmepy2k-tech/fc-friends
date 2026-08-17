export type ScheduleCategory =
  | "U-12"
  | "U-11"
  | "U-10"
  | "U-9"
  | "U-8"
  | "U-7"
  | "キッズ";

export type ScheduleFilterCategory = ScheduleCategory | "ALL";

export interface ScheduleItem {
  id: string;
  date: string;       // YYYY-MM-DD
  startTime: string;  // HH:MM
  endTime?: string;
  category: ScheduleCategory;
  title: string;
  venue: string;
  type?: string;      // 通常練習 / 練習試合 / 大会 等
  note?: string;
  mapUrl?: string;
}

export const CATEGORY_ORDER: ScheduleFilterCategory[] = [
  "U-12", "U-11", "U-10", "U-9", "U-8", "U-7", "キッズ", "ALL",
];
