/**
 * Scope.tsx
 *
 * "Scope of Work & Project Components" section.
 *
 * Layout:
 *  - Centred heading + subtitle
 *  - Four icon cards in a row:
 *      1. Technical Assistance
 *      2. Digital Training
 *      3. Access to Market
 *      4. Access to Funding
 *
 * Background: var(--color-peach) #FFF1E6
 * Card background: var(--color-white)
 * Icons: lucide-react
 */

import { Wrench, Monitor, Globe, DollarSign } from 'lucide-react';
import styles from './Scope.module.css';

/* ── Card data ─────────────────────────────────────────────── */
const SCOPE_CARDS = [
  {
    icon: <Wrench size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Technical Assistance',
    body: 'Building technical skills for women entrepreneurs with focus on digital trainings on export, access to market and finance.',
  },
  {
    icon: <Monitor size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Digital Training',
    body: 'Comprehensive digital skills development tailored to modern export business operations.',
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Access to Market',
    body: 'Access to the international market for value added products and services across the globe.',
  },
  {
    icon: <DollarSign size={32} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Access to Funding',
    body: 'Creating an enabling platform to access funding for trade and export for women entrepreneurs in Lagos.',
  },
];

export default function Scope() {
  return (
    /* id="training" — linked from navbar "Training" */
    <section id="training" className={styles.scope}>
      <div className="container">

        {/* ── Section heading ── */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Scope of Work &amp; Project Components</h2>
          <p className={styles.subtitle}>
            The sheEXports will empower +1,000 women entrepreneurs in Lagos State by
            providing comprehensive support structures.
          </p>
        </div>

        {/* ── Four scope cards ── */}
        <div className={styles.grid}>
          {SCOPE_CARDS.map(({ icon, title, body }) => (
            <div key={title} className={styles.card}>
              {/* Icon in red */}
              <span className={styles.cardIcon}>{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
