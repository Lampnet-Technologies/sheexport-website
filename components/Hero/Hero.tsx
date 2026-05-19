/**
 * Hero.tsx
 *
 * Redesigned full-bleed hero section matching Frame_4.png.
 *
 * Layout (left-aligned overlay on a full-width background image):
 *  - heroImage.png as the background (object-fit: cover, full viewport height)
 *  - Dark gradient overlay on the left so text stays readable
 *  - Top-left: SheExports logo circle + "SheExports" label beneath it
 *  - Below logo: "In Partnership with" label + two partner logo cards
 *  - Lower-left: Giant bold uppercase "SHEEXPORTS" heading
 *  - Sub-tagline: "PRODUCE. ADD VALUE. EXPORT"
 *  - CTA row: filled red "REGISTER TO ATTEND" + outlined red "APPLY FOR TRAINING"
 */

import Image from 'next/image';
import styles from './Hero.module.css';

/* ── Google Form URLs ───────────────────────────────────────── */
const REGISTER_URL = 'https://forms.gle/HoAnsNEDqDVDZyiw9';
const APPLY_URL = 'https://forms.gle/4bk89JwzHbHSpuKS8';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      {/* ── Background image ── */}
      <Image
        src="/images/heroImage.png"
        alt="Woman entrepreneur standing confidently at a port with export goods"
        fill
        priority
        className={styles.bgImage}
        sizes="100vw"
      />

      {/* ── Left-side gradient overlay for text legibility ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── All foreground content ── */}
      <div className={`container ${styles.content}`}>

        {/* ── SheExports logo + name ── */}
        <div className={styles.logoBlock}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo.png"
              alt="SheExports logo"
              width={80}
              height={80}
              className={styles.logo}
              priority
            />
          </div>
         {/*  <span className={styles.logoLabel}>SheExports</span> */}
        </div>

        {/* ── "In Partnership with" + partner logos ── */}
        <div className={styles.partnerBlock}>
          <p className={styles.partnerLabel}>In Partnership with</p>
          <div className={styles.partnerLogos}>
            <div className={styles.partnerCard}>
              <Image
                src="/images/logo-lagos.png"
                alt="Lagos State Ministry of Wealth Creation and Employment"
                width={72}
                height={44}
                className={styles.partnerLogo}
              />
            </div>
            <div className={styles.partnerCard}>
              <Image
                src="/images/logo-lsetf.png"
                alt="LSETF – Lagos State Employment Trust Fund"
                width={100}
                height={44}
                className={styles.partnerLogo}
              />
            </div>
          </div>
        </div>

        {/* ── Main heading ── */}
        <div className={styles.headingBlock}>
          <h1 className={styles.heading}>SHEEXPORTS</h1>
          <p className={styles.tagline}>PRODUCE. ADD VALUE. EXPORT</p>
        </div>

        {/* ── CTA buttons ── */}
        <div className={styles.ctaGroup}>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnFilled}
          >
            REGISTER TO ATTEND
          </a>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            APPLY FOR TRAINING
          </a>
        </div>

      </div>
    </section>
  );
}