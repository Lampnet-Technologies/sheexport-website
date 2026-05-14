/**
 * privacy-policy/page.tsx
 *
 * Privacy Policy page for SheExports 2026.
 * Route: /privacy-policy
 *
 * Uses LegalLayout for the shared header / hero / footer shell,
 * and LegalContent styles for all prose typography.
 */

import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import styles      from '@/components/LegalLayout/LegalContent.module.css';

/* ── Page metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Privacy Policy | SheExports 2026',
  description: 'How SheExports 2026 collects, uses, and protects your personal information.',
};

/* ── Page component ─────────────────────────────────────────── */
export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2026">

      {/* ── 1. Introduction ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Introduction</h2>
        <p className={styles.body}>
          Welcome to the SheExports 2026 Initiative (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are committed to
          protecting the personal information of every woman entrepreneur, partner, and stakeholder
          who engages with our programme. This Privacy Policy explains what data we collect, why
          we collect it, how we use it, and the rights you have over it.
        </p>
        <p className={styles.body}>
          By registering for the SheExports programme, attending our events, or using our website,
          you agree to the practices described in this policy.
        </p>
      </div>

      {/* ── 2. Information We Collect ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Information We Collect</h2>

        <h3 className={styles.subTitle}>Information you provide directly</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Full name and business name</li>
          <li className={styles.listItem}>Email address and phone number</li>
          <li className={styles.listItem}>Local government area and state of residence</li>
          <li className={styles.listItem}>Business registration details and sector</li>
          <li className={styles.listItem}>Training preferences and programme application responses</li>
          <li className={styles.listItem}>Payment or funding-related information where applicable</li>
        </ul>

        <h3 className={styles.subTitle}>Information collected automatically</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Browser type, IP address, and device information</li>
          <li className={styles.listItem}>Pages visited, time spent, and navigation paths on our website</li>
          <li className={styles.listItem}>Referral source (how you found us)</li>
        </ul>
      </div>

      {/* ── 3. How We Use Your Information ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
        <p className={styles.body}>
          We use the information we collect solely to further the mission of the SheExports
          Initiative and to improve participant outcomes. Specifically, we use your data to:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Process your registration and enrolment in training modules
          </li>
          <li className={styles.listItem}>
            Send programme updates, event invitations, and relevant notifications
          </li>
          <li className={styles.listItem}>
            Match participants with market access, funding, and mentorship opportunities
          </li>
          <li className={styles.listItem}>
            Measure programme impact and produce anonymised impact reports for stakeholders
          </li>
          <li className={styles.listItem}>
            Improve our website, training content, and participant experience
          </li>
          <li className={styles.listItem}>
            Comply with applicable Nigerian laws and regulatory requirements
          </li>
        </ul>
        <div className={styles.highlight}>
          We will <span className={styles.strong}>never</span> sell, rent, or trade your personal
          information to third parties for marketing purposes.
        </div>
      </div>

      {/* ── 4. Data Sharing ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Data Sharing &amp; Disclosure</h2>
        <p className={styles.body}>
          We may share your information with trusted implementing partners — including MABA,
          LSETF, and the Lagos State Ministry of Wealth Creation and Employment — strictly for the
          purpose of delivering programme benefits to you. All partners are contractually bound to
          handle your data with the same level of care described in this policy.
        </p>
        <p className={styles.body}>
          We may also disclose information where required by Nigerian law, court order, or
          government authority.
        </p>
      </div>

      {/* ── 5. Data Retention ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Data Retention</h2>
        <p className={styles.body}>
          We retain your personal data for as long as you are an active participant in the
          SheExports programme and for a period of five (5) years thereafter to support
          longitudinal impact assessment. You may request deletion of your data at any time,
          subject to legal obligations that require us to retain certain records.
        </p>
      </div>

      {/* ── 6. Data Security ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Data Security</h2>
        <p className={styles.body}>
          We implement appropriate technical and organisational measures to protect your personal
          information against unauthorised access, alteration, disclosure, or destruction. These
          include access controls, encrypted storage, and regular security reviews.
        </p>
        <p className={styles.body}>
          No method of transmission over the internet or electronic storage is completely secure.
          While we strive to protect your information, we cannot guarantee absolute security.
        </p>
      </div>

      {/* ── 7. Your Rights ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Your Rights</h2>
        <p className={styles.body}>
          Under the Nigeria Data Protection Regulation (NDPR) and applicable law, you have the
          right to:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Access a copy of the personal data we hold about you</li>
          <li className={styles.listItem}>Request correction of inaccurate or incomplete data</li>
          <li className={styles.listItem}>Request deletion of your personal data</li>
          <li className={styles.listItem}>Object to or restrict certain types of processing</li>
          <li className={styles.listItem}>
            Withdraw consent at any time where processing is based on consent
          </li>
        </ul>
      </div>

      {/* ── 8. Cookies ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Cookies &amp; Tracking</h2>
        <p className={styles.body}>
          Our website may use cookies and similar tracking technologies to enhance your browsing
          experience and gather analytical data. You can control cookie preferences through your
          browser settings. Disabling cookies may affect some website functionality.
        </p>
      </div>

      {/* ── 9. Changes to This Policy ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Changes to This Policy</h2>
        <p className={styles.body}>
          We may update this Privacy Policy from time to time to reflect changes in our practices
          or applicable law. When we make material changes, we will update the &quot;Last updated&quot; date
          at the top of this page. We encourage you to review this policy periodically.
        </p>
      </div>

    </LegalLayout>
  );
}
