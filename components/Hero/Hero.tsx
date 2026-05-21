/**
 * Hero.tsx
 *
 * Full-bleed hero adjusted to match hero.PNG.
 *
 * Structure:
 *  - heroImage.png fills the full section (object-position: center right
 *    keeps the woman portrait visible on the right)
 *  - Subtle gradient overlay (light at top, slightly darker bottom-left)
 *  - Content column split into two logical groups via justify-content: space-between:
 *      TOP:    logoBlock + partnerBlock
 *      BOTTOM: headingBlock + ctaGroup (buttons in a frosted panel)
 *  - All logos are transparent PNGs — no background colour on any wrapper
 *  - "SheExports" text label restored beneath the main logo
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

      {/* ── Gradient overlay for readability ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Foreground content ── */}
      <div className={styles.content}>

        {/* ════ TOP: logo + partner logos ════ */}
        <div className={styles.topBlock}>

          {/* SheExports logo + label */}
          <div className={styles.logoBlock}>
            <div className={styles.logoWrap}>
              <Image
                src="/images/logo.png"
                alt="SheExports logo"
                width={72}
                height={72}
                className={styles.logo}
                priority
              />
            </div>
            <span className={styles.logoLabel}>SheEXports</span>
          </div>

          {/* "In Partnership with" + two partner logos */}
          <div className={styles.partnerBlock}>
            <p className={styles.partnerLabel}>In Partnership with</p>
            <div className={styles.partnerLogos}>
              <div className={styles.logoBlock}>
                <div className={styles.partnerCard}>
                  <Image
                    src="/images/logo-lagos.png"
                    alt="Lagos State Ministry of Wealth Creation and Employment"
                    width={90}
                    height={46}
                    className={styles.partnerLogo}
                  />
                </div>
                <span className={styles.logoLabel}>MWC&E</span>
              </div>

              <div className={styles.logoBlock}>
                <div className={styles.partnerCard}>
                  <Image
                    src="/images/logo-lsetf.png"
                    alt="LSETF – Lagos State Employment Trust Fund"
                    width={110}
                    height={46}
                    className={styles.partnerLogo}
                  />
                </div>
                <span className={styles.logoLabel}>LSETF</span>
              </div>
            </div>
          </div>

        </div>{/* end topBlock */}

        {/* ════ BOTTOM: heading + CTA buttons ════ */}
        <div className={styles.bottomBlock}>

          {/* Heading + tagline */}
          <div className={styles.headingBlock}>
            <h1 className={styles.heading}>SheEXports</h1>
            <p className={styles.tagline}>PRODUCE. ADD VALUE. EXPORT</p>
          </div>

          {/* Buttons in frosted panel */}
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

        </div>{/* end bottomBlock */}

      </div>{/* end content */}
    </section>
  );
}