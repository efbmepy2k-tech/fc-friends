import Header from "./components/Header";
import Hero from "./components/Hero";
import EmergencyNotice from "./components/EmergencyNotice";
import ScheduleSection from "./components/ScheduleSection";
import NewsSection from "./components/NewsSection";
import JoinCTA from "./components/JoinCTA";
import ClubSection from "./components/ClubSection";
import TeamSection from "./components/TeamSection";
import GallerySection from "./components/GallerySection";
import SupportPartners from "./components/SupportPartners";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.container}>
          <Hero />
          <EmergencyNotice />
          <ScheduleSection />
          <NewsSection />
          <ClubSection />
          <TeamSection />
          <GallerySection />
        </div>
        {/* Full-bleed section — outside container for white bg edge-to-edge */}
        <SupportPartners />
        <div className={styles.container}>
          <JoinCTA />
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
