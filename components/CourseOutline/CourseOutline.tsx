/**
 * CourseOutline.tsx
 *
 * "Course Outline" section.
 *
 * Layout:
 *  - Section heading + duration/date info (Inter)
 *  - Six week-by-week accordion-style rows with red week badge
 *  - "Apply for Training" CTA button
 *
 * Section background: var(--color-cream) #FFF8F4
 * Card/row background: var(--color-peach)  #FFF1E6
 * Week badge:          var(--color-red)    #AB0029
 */

import styles from './CourseOutline.module.css';

/* ── Google Form URL — replace with actual link ────────────── */
const APPLY_URL = 'https://forms.gle/4bk89JwzHbHSpuKS8';

/* ── Course week data ──────────────────────────────────────── */
const WEEKS = [
  {
    week: 1,
    title: 'Generative AI for digital marketing',
    description:
      'Using AI to generate content, personalise user experiences and automate marketing tasks.',
  },
  {
    week: 2,
    title: 'Understanding export and international trade',
    description:
      'Import–export procedures, trade finance/supply chain management, export readiness assessment.',
  },
  {
    week: 3,
    title: 'B2B Buyer engagement logistics',
    description:
      'For export international prosperity and lead generation, export documentation freight forwarding and logistics.',
  },
  {
    week: 4,
    title: 'Rules of origin (RoO) & Regulations',
    description:
      'Tax/Customs/Customs: Technical regulations and practical application of free trade agreements (FTAs).',
  },
  {
    week: 5,
    title: 'Access to funding financial management',
    description:
      'Financial literacy, financial budgeting and working capital management and choosing the right funding for your business.',
  },
  {
    week: 6,
    title: 'Investment readiness',
    description:
      'Creating a compelling investment thesis building robust financial models and understanding investor expectations.',
  },
];

export default function CourseOutline() {
  return (
    /* id="training" already used by Scope, so we use a child anchor here */
    <section id="course-outline" className={styles.courseOutline}>
      <div className="container">

        {/* ── Section heading ── */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Course Outline</h2>
          <p className={styles.meta}>
            Duration: 6 Weeks {/* &nbsp;|&nbsp; Start date: May 2nd – June 20th 2026. */}
          </p>
        </div>

        {/* ── Week rows ── */}
        <div className={styles.weekList}>
          {WEEKS.map(({ week, title, description }) => (
            <div key={week} className={styles.weekRow}>
              {/* Week badge */}
              <span className={styles.weekBadge}>Week {week}</span>

              {/* Content */}
              <div className={styles.weekContent}>
                <h3 className={styles.weekTitle}>{title}</h3>
                <p className={styles.weekDesc}>{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Apply CTA ── */}
        <div className={styles.ctaWrap}>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-red"
          >
            Apply for Training
          </a>
        </div>

      </div>
    </section>
  );
}
