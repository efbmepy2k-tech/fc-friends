"use client";

import styles from "./schedule.module.css";
import type { ScheduleFilterCategory } from "@/app/types/schedule";
import { CATEGORY_ORDER } from "@/app/types/schedule";

interface Props {
  selected: ScheduleFilterCategory;
  onChange: (cat: ScheduleFilterCategory) => void;
}

export default function ScheduleCategoryFilter({ selected, onChange }: Props) {
  return (
    <div className={styles.filterWrap} role="group" aria-label="カテゴリーで絞り込む">
      <div className={styles.filterStrip}>
        {CATEGORY_ORDER.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.filterBtn}${selected === cat ? ` ${styles.filterBtnActive}` : ""}`}
            aria-pressed={selected === cat}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
