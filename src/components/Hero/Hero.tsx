"use client";

import React from "react";
import styles from "./Hero.module.css";
import flipStyles from "./FlipCards.module.css";

// SVG Icons
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

const Hero = () => {
    return (
        <section className={styles.section}>
            {/* Background Ambience */}
            <div className={styles.background}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>
                <div className={`${styles.blob} ${styles.blob3}`}></div>
            </div>

            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Connecting the <br />
                        <span className={styles.highlight}>Dots</span> in Your Career
                    </h1>

                    <p className={styles.description}>
                        The all-in-one ecosystem for students and professionals. Find
                        internships, enroll in courses, freelance, and land your dream job —
                        all in one place.
                    </p>

                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>Get Started</button>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statVal}>10k+</span>
                            <span className={styles.statLabel}>Active Students</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statVal}>500+</span>
                            <span className={styles.statLabel}>Hiring Partners</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statVal}>95%</span>
                            <span className={styles.statLabel}>Placement Rate</span>
                        </div>
                    </div>
                </div>

                {/* Right Visuals - Flip Cards */}
                <div className={flipStyles.visuals}>
                    {/* Card 1: Internships */}
                    <div className={flipStyles.card}>
                        <div className={flipStyles.content}>
                            {/* Back - Default View */}
                            <div className={flipStyles.back}>
                                <div className={flipStyles.backContent}>
                                    <div className={flipStyles.iconWrapper}>
                                        <BriefcaseIcon />
                                    </div>
                                    <h3 className={flipStyles.backTitle}>Internships</h3>
                                    <p className={flipStyles.backSubtitle}>Hover to explore</p>
                                </div>
                            </div>
                            {/* Front - Revealed on Hover */}
                            <div className={flipStyles.front}>
                                <div className={flipStyles.frontContent}>
                                    <div className={flipStyles.frontHeader}>
                                        <div className={flipStyles.frontIconSmall}>
                                            <BriefcaseIcon />
                                        </div>
                                        <h3 className={flipStyles.frontTitle}>Internships</h3>
                                    </div>
                                    <p className={flipStyles.frontDescription}>
                                        Get hands-on experience at top companies. Remote and on-site opportunities available.
                                    </p>
                                    <div className={flipStyles.frontFooter}>
                                        <span className={flipStyles.tag}>500+ Openings</span>
                                        <span className={flipStyles.tag}>Paid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Courses */}
                    <div className={flipStyles.card}>
                        <div className={flipStyles.content}>
                            <div className={flipStyles.back}>
                                <div className={flipStyles.backContent}>
                                    <div className={flipStyles.iconWrapper}>
                                        <BookIcon />
                                    </div>
                                    <h3 className={flipStyles.backTitle}>Courses</h3>
                                    <p className={flipStyles.backSubtitle}>Hover to explore</p>
                                </div>
                            </div>
                            <div className={flipStyles.front}>
                                <div className={flipStyles.frontContent}>
                                    <div className={flipStyles.frontHeader}>
                                        <div className={flipStyles.frontIconSmall}>
                                            <BookIcon />
                                        </div>
                                        <h3 className={flipStyles.frontTitle}>Courses</h3>
                                    </div>
                                    <p className={flipStyles.frontDescription}>
                                        Learn in-demand skills from industry experts. Get certified and stand out.
                                    </p>
                                    <div className={flipStyles.frontFooter}>
                                        <span className={flipStyles.tag}>200+ Courses</span>
                                        <span className={flipStyles.tag}>Certified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Freelance */}
                    <div className={flipStyles.card}>
                        <div className={flipStyles.content}>
                            <div className={flipStyles.back}>
                                <div className={flipStyles.backContent}>
                                    <div className={flipStyles.iconWrapper}>
                                        <RocketIcon />
                                    </div>
                                    <h3 className={flipStyles.backTitle}>Freelance</h3>
                                    <p className={flipStyles.backSubtitle}>Hover to explore</p>
                                </div>
                            </div>
                            <div className={flipStyles.front}>
                                <div className={flipStyles.frontContent}>
                                    <div className={flipStyles.frontHeader}>
                                        <div className={flipStyles.frontIconSmall}>
                                            <RocketIcon />
                                        </div>
                                        <h3 className={flipStyles.frontTitle}>Freelance</h3>
                                    </div>
                                    <p className={flipStyles.frontDescription}>
                                        Work on exciting projects with global clients. Flexible hours and great pay.
                                    </p>
                                    <div className={flipStyles.frontFooter}>
                                        <span className={flipStyles.tag}>Flexible</span>
                                        <span className={flipStyles.tag}>Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
