"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./TeamSection.module.css";

function TeamImg({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className={styles.imageWrap}>
      {!err ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
          onError={() => setErr(true)}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #2a2a2a, #600010)",
            display: "grid",
            placeItems: "center",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.overline}>カテゴリー紹介</p>
        <h2 className={styles.title}>TEAM CATEGORIES</h2>
      </div>

      <div className={styles.grid}>
        {/* ── JUNIOR ───────────────────────────────────────────── */}
        <article className={styles.card}>
          <TeamImg src="/images/team-junior.jpg" alt="ジュニアクラスの試合風景" />
          <div className={styles.body}>
            <div className={styles.categoryBadge}>
              <span className={styles.categoryLabel}>JUNIOR</span>
              <span className={styles.categoryTarget}>U-7〜U-12</span>
            </div>

            <div>
              <p className={styles.grade}>ジュニアカテゴリー</p>
              <p className={styles.gradeSub}>小学1〜6年生対象</p>
            </div>

            <h3 className={styles.cardHeading}>
              成長に合わせて、次のステージへ。
            </h3>

            <p className={styles.description}>
              小学1年生から6年生まで、年代に応じた指導を行い、個人技・判断力・チームワークを段階的に育てます。
            </p>

            <div className={styles.steps} aria-label="育成ステップ">
              <div className={styles.step}>
                <span className={styles.stepDot} aria-hidden="true" />
                <div className={styles.stepBody}>
                  <span className={styles.stepTitle}>U-7・U-8</span>
                  <span className={styles.stepLabel}>基礎・楽しさ</span>
                  <span className={styles.stepDesc}>
                    ボール操作とサッカーを楽しむ姿勢を身につける
                  </span>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepDot} aria-hidden="true" />
                <div className={styles.stepBody}>
                  <span className={styles.stepTitle}>U-9・U-10</span>
                  <span className={styles.stepLabel}>個人技・判断</span>
                  <span className={styles.stepDesc}>
                    技術を磨き、自分で考えてプレーする力を育てる
                  </span>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepDot} aria-hidden="true" />
                <div className={styles.stepBody}>
                  <span className={styles.stepTitle}>U-11・U-12</span>
                  <span className={styles.stepLabel}>戦術・自立</span>
                  <span className={styles.stepDesc}>
                    チーム戦術を理解し、自立した選手を目指す
                  </span>
                </div>
              </div>
            </div>

            <a href="#join" className={styles.cta}>
              ジュニアカテゴリーを見る
            </a>
          </div>
        </article>

        {/* ── KIDS ─────────────────────────────────────────────── */}
        <article className={styles.card}>
          <TeamImg src="/images/team-kids.jpg" alt="キッズクラスの練習風景" />
          <div className={styles.body}>
            <div className={styles.categoryBadge}>
              <span className={styles.categoryLabel}>KIDS</span>
              <span className={styles.categoryTarget}>年中〜年長</span>
            </div>

            <div>
              <p className={styles.grade}>キッズクラス</p>
              <p className={styles.gradeSub}>幼稚園 年中・年長対象</p>
            </div>

            <h3 className={styles.cardHeading}>
              はじめてのサッカーを、楽しく。
            </h3>

            <p className={styles.description}>
              遊びの要素を取り入れながら、ボールに触れる楽しさや、仲間と一緒に体を動かす喜びを育てます。
            </p>

            <div className={styles.points} aria-label="育成テーマ">
              <span className={styles.pointTag}>楽しむ</span>
              <span className={styles.pointTag}>ボールに慣れる</span>
              <span className={styles.pointTag}>仲間と遊ぶ</span>
            </div>

            <a href="#join" className={styles.cta}>
              キッズクラスを見る
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
