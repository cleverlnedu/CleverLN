'use client';

import Image from "next/image";
import styles from "./herohome.module.css";

const Herohome = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* ========== LEFT SECTION ========== */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Your Degree Isn’t <br />
            Enough. <span>Your Skills Are.</span>
          </h1>

          <p className={styles.subtext}>
            Learn <strong>Cleverln’s</strong> job-ready skills, find jobs,
            freelance, internships and connect with companies — all in one place.
          </p>

          <button className={styles.cta}>Explore Now</button>

          
        </div>

        {/* ========== RIGHT SECTION ========== */}
        <div className={styles.right}>

          {/* ORBIT SYSTEM */}
          <div className={styles.orbit}>

            {/* Job Card */}
            <div className={`${styles.orbitItem} ${styles.item1}`}>
              <div className={styles.jobCard}>
                <div className={styles.dots}>
                  <span /><span /><span /><span />
                </div>
                <div className={styles.lineWide} />
                <div className={styles.line} />
                <div className={styles.lineSmall} />
                <div className={styles.applyBtn} />
              </div>
            </div>

            {/* Growth Card */}
            <div className={`${styles.orbitItem} ${styles.item2}`}>
              <div className={styles.growthCard}>
                <svg viewBox="0 0 200 120">
                  <polyline
                    points="10,90 60,60 100,70 150,30"
                    fill="none"
                    stroke="#7dbb19"
                    strokeWidth="6"
                  />
                </svg>
              </div>
            </div>

            {/* Analytics Card */}
            <div className={`${styles.orbitItem} ${styles.item3}`}>
              <div className={styles.analyticsCard}>
                <svg viewBox="0 0 200 100">
                  <circle cx="30" cy="70" r="10" />
                  <circle cx="100" cy="40" r="14" />
                  <circle cx="170" cy="60" r="10" />
                  <line x1="30" y1="70" x2="100" y2="40" />
                  <line x1="100" y1="40" x2="170" y2="60" />
                </svg>
              </div>
            </div>

            {/* Mentor Strip */}
            <div className={`${styles.orbitItem} ${styles.item4}`}>
              <div className={styles.mentorStrip}>
                <span className={styles.avatar} />
                <p>Backed by Best Mentors</p>
                <span className={styles.avatar} />
              </div>
            </div>

          </div>

          {/* CIRCULAR BACKGROUND */}
          <div className={styles.circleWrap}>
            <div className={styles.outerRing}>
              <div className={styles.middleRing}>
                <div className={styles.innerCircle} />
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className={styles.heroImage}>
            <Image
              src="/hero-girl.png"
              alt="Student"
              width={420}
              height={520}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Herohome;
