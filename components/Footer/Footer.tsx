/**
 * Footer.tsx
 *
 * Page footer for SheExports 2026.
 *
 * Layout: two rows
 *  - Top:    nav links (Contact Us → tel:, Privacy Policy, Terms of Service, FAQ)
 *  - Bottom: copyright line
 *
 * Background: var(--color-white) with a top border
 * Font: Inter
 *
 * NOTE: "Contact Us" links to a phone number as specified.
 */

import styles from './Footer.module.css';

/* ── Phone number for "Contact Us" ──────────────────────────── */
const CONTACT_PHONE = 'tel:+2347012438419'; // TODO: replace with real number

/* ── Footer links data ──────────────────────────────────────── */
const FOOTER_LINKS = [
  { label: 'Contact Us',       href: CONTACT_PHONE },
  { label: 'Privacy Policy',   href: '/privacy-policy/'    },
  { label: 'Terms of Service', href: '/terms-of-service/'      },
  { label: 'FAQ',              href: '/faq/'         },
];

/* ── Current year for copyright ─────────────────────────────── */
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* ── Nav links row ── */}
        <nav aria-label="Footer navigation">
          <ul className={styles.linkList}>
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.link}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Copyright ── */}
        <p className={styles.copyright}>
          &copy; {YEAR} sheEXports Initiative. A collaboration between MABA, LSETF, and Lagos State
          Ministry of Wealth Creation.
        </p>

      </div>
    </footer>
  );
}
