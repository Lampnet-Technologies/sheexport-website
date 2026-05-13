/**
 * Hero.tsx
 *
 * Full-width hero / banner section of SheExports 2026.
 *
 * Layout:
 *  - Yellow (#F6BD50) background
 *  - "INVITES YOU TO" label
 *  - "sheEXports 2026" heading in Playfair Display
 *  - "THEME" badge
 *  - Subtitle tagline
 *  - Two CTA buttons: Register to Attend + Apply for Training
 *  - Partner logos row (MABA | LSETF | Lagos State)
 */

import Image  from 'next/image';
import styles from './Hero.module.css';

/* ── Google Form URLs — replace with actual links ──────────── */
const REGISTER_URL = 'https://forms.gle/HoAnsNEDqDVDZyiw9';   // TODO: replace with real URL
const APPLY_URL    = 'https://forms.gle/4bk89JwzHbHSpuKS8';   // TODO: replace with real URL

export default function Hero() {
  return (
    /* id="home" lets future anchor links target this section */
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        {/* ── Partner logos row at the top ── */}
        <div className={styles.topLogos} aria-label="Organised by">
          <Image
            src="/images/logo-maba.png"
            alt="MABA logo"
            width={80}
            height={40}
            className={styles.topLogo}
          />
          <Image
            src="/images/logo-lsetf.png"
            alt="LSETF logo"
            width={80}
            height={40}
            className={styles.topLogo}
          />
          <Image
            src="/images/logo-lagos.png"
            alt="Lagos State logo"
            width={80}
            height={40}
            className={styles.topLogo}
          />
        </div>

        {/* ── Invite label ── */}
        <p className={styles.invites}>INVITES YOU TO</p>

        {/* ── Main heading — Playfair Display ── */}
        <h1 className={styles.heading}>sheEXports 2026</h1>

        {/* ── Theme badge ── */}
        <div className={styles.themeBadge}>THEME</div>

        {/* ── Tagline ── */}
        <p className={styles.tagline}>
          PRODUCE, ADD VALUE, EXPORT: A CATALYST<br />
          FOR SUSTAINABLE ECONOMIC GROWTH
        </p>

        {/* ── CTA Buttons ── */}
        <div className={styles.ctaGroup}>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-red ${styles.ctaBtn}`}
          >
            Register to Attend
          </a>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline-red ${styles.ctaBtn}`}
          >
            Apply for Training
          </a>
        </div>
      </div>
    </section>
  );
}
