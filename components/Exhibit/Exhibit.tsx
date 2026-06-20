/**
 * Exhibit.tsx
 *
 * "Exhibit at sheEXports" section.
 *
 * Layout:
 *  - Centred header: Small red label "EXHIBITION OPPORTUNITIES" + Playfair Display heading
 *  - Introduction text detailing the exhibition showcase
 *  - Three feature/benefit cards:
 *      1. Global Exposure (Store icon)
 *      2. Strategic Networking (Handshake icon)
 *      3. Market Expansion (Globe icon)
 *  - Centred "Register to Exhibit" CTA button at the bottom
 *
 * Background: var(--color-cream) #FFF8F4
 * Card background: var(--color-white)
 * Accent icons: var(--color-red) #AB0029
 */

import { Store, Handshake, Globe } from 'lucide-react';
import styles from './Exhibit.module.css';

/* ── Google Form URL for Exhibitor registration ────────────── */
const EXHIBIT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfxN6RFNge7baQ1Ov6mz-Cbau9h-6EQ8M-J-BBr1-R-q8um_Q/viewform?usp=publish-editor';

/* ── Benefit cards data ─────────────────────────────────────── */
const BENEFIT_CARDS = [
  {
    icon: <Store size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Global Product Showcase',
    body: 'Display your export-ready products, goods, and services directly to international buyers, retail distributors, and trade delegates looking for quality African brands.',
  },
  {
    icon: <Handshake size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'B2B Networking',
    body: 'Engage in structured networking sessions with logistic partners, financial institutions, and regulatory agencies (NAFDAC, NEPC, customs) to streamline your export journey.',
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Market Readiness & Insights',
    body: 'Gain real-time feedback on your packaging, branding, and pricing from trade experts, and discover new market access opportunities across ECOWAS, AfCFTA, and global markets.',
  },
];

export default function Exhibit() {
  return (
    <section id="exhibit" className={styles.exhibit}>
      <div className="container">

        {/* ── Section header ── */}
        <div className={styles.header}>
          <p className={styles.label}>EXHIBITION OPPORTUNITIES</p>
          <h2 className={styles.heading}>Showcase Your Export-Ready Brand</h2>
          <p className={styles.subtitle}>
            Are you a woman entrepreneur in Lagos State with products ready for the global market? 
            Exhibit at the sheEXports Conference 2026 to elevate your brand, secure off-take agreements, 
            and expand your global footprint.
          </p>
        </div>

        {/* ── Three benefit cards ── */}
        <div className={styles.grid}>
          {BENEFIT_CARDS.map(({ icon, title, body }) => (
            <div key={title} className={styles.card}>
              <span className={styles.cardIcon}>{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Button at the bottom ── */}
        <div className={styles.ctaWrapper}>
          <a
            href={EXHIBIT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-red ${styles.ctaBtn}`}
          >
            Register to Exhibit
          </a>
        </div>

      </div>
    </section>
  );
}
