import styles from "./schedule.module.css";

interface Props {
  message?: string;
}

export default function ScheduleEmptyState({ message = "このカテゴリーの予定は現在ありません。" }: Props) {
  return <div className={styles.empty}>{message}</div>;
}
