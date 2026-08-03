import styles from "../page.module.css";

const teams = [
  {
    title: "U-12",
    grade: "小学6年生",
    description: "技術と戦術理解を深め、個人とチームの両方を伸ばす最上位クラス。",
    schedule: "毎週土・日曜",
  },
  {
    title: "U-11",
    grade: "小学5年生",
    description: "ポジション意識と連携プレーを学びながら、競技レベルを高めます。",
    schedule: "毎週土・日曜",
  },
  {
    title: "U-10",
    grade: "小学4年生",
    description: "基礎技術をしっかり身につけ、楽しさと勝負へのこだわりを育てます。",
    schedule: "毎週土・日曜",
  },
  {
    title: "U-9",
    grade: "小学3年生",
    description: "ボールコントロールと仲間との関わりを通じて、サッカーの面白さを発見します。",
    schedule: "毎週日曜",
  },
  {
    title: "U-8",
    grade: "小学2年生",
    description: "遊びを通じてサッカーの基礎を学び、動くことの楽しさを育みます。",
    schedule: "毎週日曜",
  },
  {
    title: "U-7",
    grade: "小学1年生",
    description: "ボールに親しみ、走ることが好きになるための入門クラスです。",
    schedule: "毎週日曜",
  },
  {
    title: "キッズ",
    grade: "年長・年中",
    description: "サッカーを通じて体を動かす習慣とお友達との交流を大切にします。",
    schedule: "月2回・土曜",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.sectionHeading}>
        <p className={styles.sectionOverline}>チーム紹介</p>
        <h2 className={styles.sectionTitle}>TEAM</h2>
      </div>
      <div className={styles.teamGrid}>
        {teams.map((team) => (
          <article key={team.title} className={styles.teamCard}>
            <div className={styles.teamCardHeader}>
              <h3 className={styles.teamTitle}>{team.title}</h3>
              <span className={styles.teamGrade}>{team.grade}</span>
            </div>
            <p className={styles.teamDescription}>{team.description}</p>
            <p className={styles.teamSchedule}>
              <span className={styles.teamScheduleLabel}>活動日</span>
              {team.schedule}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
