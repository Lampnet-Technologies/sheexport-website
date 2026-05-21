/**
 * Partnership.tsx
 *
 * "Join Our Mission" / Partner or Sponsor section.
 *
 * Layout: centred, full-width yellow (#F6BD50) block
 *  - Small label: "PARTNER OR SPONSOR"
 *  - Large Playfair Display heading
 *  - Body copy
 *  - "Become a Partner" CTA button (links to Google Form)
 *
 * Background: var(--color-yellow) #F6BD50
 */

import styles from './Partnership.module.css';

/* ── Google Form URL — replace with actual link ────────────── */
const PARTNER_URL = 'https://forms.gle/fdzk4QXtkTT33PUs8';

export default function Partnership() {
  return (
    /* id="partner-sponsor" — linked from navbar "Partner/Sponsor" */
    <section id="partner-sponsor" className={styles.partnership}>
      <div className={`container ${styles.inner}`}>

        {/* ── Top label ── */}
        <p className={styles.label}>PARTNER OR SPONSOR</p>

        {/* ── Main heading — Playfair Display ── */}
        <h2 className={styles.heading}>Join Our Mission</h2>

        {/* ── Body text ── */}
        <p className={styles.body}>
          Align your brand with sustainable economic growth by sponsoring the
          sheEXports initiative, you directly empower 10,000+ women entrepreneurs in
          Lagos State through targeted technical assistance, digital training, and market
          access programs. Make a lasting corporate impact today.
        </p>

        {/* ── CTA button ── */}
        <a
          href={PARTNER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-white-red ${styles.ctaBtn}`}
        >
          Become a Partner
        </a>

      </div>
    </section>
  );
}
