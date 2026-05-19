/**
 * About.tsx
 *
 * "About The Program" section.
 *
 * Layout: two-column
 *  - Left:  heading, body copy, key metrics list
 *  - Right: partnership proposal image (circular collage)
 *
 * Background: var(--color-cream) #FFF8F4
 * Heading font: Playfair Display
 * Body font: Inter
 */

import Image from 'next/image';
/* import { CheckCircle } from 'lucide-react'; */
import styles from './About.module.css';

/* ── Key metric items ──────────────────────────────────────── */
/* const KEY_METRICS = [
  'Duration of project: 5 years (2026–2031)',
  'Number of women to impact: 10,000',
]; */

export default function About() {
  return (
    /* id="about" is the anchor target for the navbar "About" link */
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>

        {/* ── Left column: text ── */}
        <div className={styles.content}>
          {/* Section heading — Playfair Display italic */}
          <h2 className={styles.heading}>About The Program</h2>

          {/* Programme description */}
          <p className={styles.body}>
            In 2026, The sheEXports Initiative was launched and unveiled by {' '}<strong>the Made in Africa Brands Ambassador (MABA), the Lagos State Ministry of Wealth Creation and Employment (MWC&E), and the Lagos State Employment Trust Fund (LSETF)</strong>{' '} to advance the participation of women led businesses in trade and export.
          </p>

          {/* Key metrics */}
          {/*           <div className={styles.metrics}>
            <p className={styles.metricsLabel}>KEY METRICS</p>
            <ul className={styles.metricsList}>
              {KEY_METRICS.map((metric) => (
                <li key={metric} className={styles.metricsItem}>

                  ------- Lucide CheckCircle icon in red --------
                  <CheckCircle
                    size={16}
                    color="var(--color-red)"
                    strokeWidth={2.5}
                    aria-hidden="true"
                    className={styles.metricsIcon}
                  />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* ── Right column: partnership image ── */}
        <div className={styles.imageWrap} aria-hidden="true">
          <Image
            src="/images/she-exports-partnership2.png"
            alt='The "She Exports" Partnership Proposal collage'
            width={380}
            height={480}
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}
