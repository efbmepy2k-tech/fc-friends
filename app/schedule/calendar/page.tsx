import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BottomNav from "@/app/components/BottomNav";
import MonthlyCalendar from "@/app/components/schedule/MonthlyCalendar";

export const metadata: Metadata = {
  title: "FC.FRIENDS 月間カレンダー",
  description: "FC.FRIENDS の月間スケジュールをカレンダー形式で確認できます。",
};

export default function ScheduleCalendarPage() {
  return (
    <div>
      <Header />
      <main>
        <MonthlyCalendar />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
