import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BottomNav from "@/app/components/BottomNav";
import SchedulePageClient from "@/app/components/schedule/SchedulePageClient";

export const metadata: Metadata = {
  title: "FC.FRIENDS スケジュール",
  description: "FC.FRIENDS の今日の予定と今後の予定をカテゴリー別に確認できます。",
};

export default function SchedulePage() {
  return (
    <div>
      <Header />
      <main>
        <SchedulePageClient />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
