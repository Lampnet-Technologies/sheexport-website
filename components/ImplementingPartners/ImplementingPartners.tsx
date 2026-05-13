/**
 * ImplementingPartners.tsx
 *
 * "Implementing Partners" section.
 *
 * Displays partner logos sourced from an array, mapped to Image components.
 * Add / remove entries in the PARTNERS array to update the grid.
 *
 * Background: var(--color-cream) #FFF8F4
 */

import Image  from 'next/image';
import styles from './ImplementingPartners.module.css';

/* ── Partners array ────────────────────────────────────────────
 *
 * To add a new partner:
 *   1. Place the image file inside  public/images/partners/
 *   2. Add a new object to this array with the correct filename and alt text.
 *
 * ─────────────────────────────────────────────────────────────*/
const PARTNERS: { src: string; alt: string; label: string }[] = [
  { src: '/images/partners/partner-1.png',         alt: 'SheEXport', label: 'SheEXport' },
  { src: '/images/partners/partner-2.png',   alt: 'Ministry of Wealth Creation', label: 'Ministry of Wealth Creation' },
  { src: '/images/partners/partner-3.png',        alt: 'LSETF – Lagos State Employment Trust Fund', label: 'LSETF' },
  { src: '/images/partners/partner-4.png',  alt: 'NEPC', label: 'NEPC' },
  { src: '/images/partners/partner-5.png',            alt: 'NAFDAC', label: 'NAFDAC' },
  { src: '/images/partners/partner-6.png',            alt: 'NAHCO AVIANCE', label: 'NAHCO AVIANCE' },
  { src: '/images/partners/partner-7.png',            alt: 'FAAN', label: 'FAAN' },
  { src: '/images/partners/partner-8.png',            alt: 'NAQS', label: 'NAQS' },
  { src: '/images/partners/partner-9.png',            alt: 'UPS', label: 'UPS' },
  { src: '/images/partners/partner-10.png',           alt: 'Nigerian Custom Services', label: 'Nigerian Custom Services' },
];

export default function ImplementingPartners() {
  return (
    /* id="partners" — linked from navbar "Implementation Partners" */
    <section id="partners" className={styles.partners}>
      <div className="container">

        {/* ── Section heading ── */}
        <h2 className={styles.heading}>Implementing Partners</h2>

        {/* ── Partners logo grid ── */}
        <div className={styles.grid}>
          {PARTNERS.map(({ src, alt, label }) => (
            <div key={src} className={styles.logoWrap}>
              <Image
                src={src}
                alt={alt}
                width={120}
                height={60}
                className={styles.logo}
              />
              <p className={styles.logoLabel}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
