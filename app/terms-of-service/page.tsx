/**
 * terms-of-service/page.tsx
 *
 * Terms of Service page for SheExports 2026.
 * Route: /terms-of-service
 *
 * Uses LegalLayout for the shared header / hero / footer shell
 * and LegalContent styles for all prose typography.
 */

import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import styles from '@/components/LegalLayout/LegalContent.module.css';

/* ── Page metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Terms of Service | SheExports 2026',
  description:
    'Read the terms and conditions governing participation in the SheExports 2026 Initiative.',
};

/* ── Page component ─────────────────────────────────────────── */
export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 2026">

      {/* ── 1. Acceptance of Terms ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.body}>
          By registering for, attending, or participating in any component of the SheExports
          2026 Initiative (&ldquo;the Programme&rdquo;), you agree to be bound by these Terms of Service
          (&ldquo;Terms&rdquo;). The Programme is organised by MABA (Made in Africa Brands Ambassador) in
          collaboration with the Lagos State Ministry of Wealth Creation and Employment (LSETF), and the Lagos State Ministry of Wealth Creation and Employment (MWC&E).
        </p>
        <p className={styles.body}>
          If you do not agree to these Terms, please do not register for or participate in the
          Programme. We reserve the right to update these Terms at any time; continued
          participation constitutes acceptance of any revised Terms.
        </p>
      </div>

      {/* ── 2. Programme Eligibility ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Programme Eligibility</h2>
        <p className={styles.body}>
          The SheExports 2026 Programme is open to women entrepreneurs based in Lagos State,
          Nigeria. To be eligible, applicants must:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Be a woman who owns or co-owns a registered or unregistered business operating
            within Lagos State
          </li>
          <li className={styles.listItem}>
            Be at least 18 years of age at the time of registration
          </li>
          <li className={styles.listItem}>
            Provide accurate and truthful information during the application process
          </li>
          <li className={styles.listItem}>
            Be available to attend the full 6-week training programme
          </li>
          <li className={styles.listItem}>
            Agree to participate in programme surveys and impact assessments as requested
          </li>
          <li className={styles.listItem}>
            Agree to attend all sheExport Events/Conferences
          </li>
        </ul>
        <div className={styles.highlight}>
          Submission of false or misleading information will result in immediate disqualification
          and may affect future eligibility for Lagos State economic empowerment programmes.
        </div>
      </div>

      {/* ── 3. Training & Programme Conduct ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Training &amp; Programme Conduct</h2>

        <h3 className={styles.subTitle}>Attendance</h3>
        <p className={styles.body}>
          Participants are expected to attend all scheduled training sessions. A minimum
          attendance rate of 80% is required to receive a Certificate of Completion. Persistent
          absence without prior notice may result in removal from the Programme.
        </p>

        <h3 className={styles.subTitle}>Code of Conduct</h3>
        <p className={styles.body}>
          All participants are expected to engage respectfully and professionally with fellow
          participants, trainers, and Programme staff. The following conduct is strictly
          prohibited:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Harassment, discrimination, or intimidation of any kind based on ethnicity, religion,
            age, disability, or any other characteristic
          </li>
          <li className={styles.listItem}>
            Disruption of training sessions or Programme events
          </li>
          <li className={styles.listItem}>
            Misrepresentation of Programme affiliation or benefits for personal gain
          </li>
          <li className={styles.listItem}>
            Sharing confidential Programme materials without written authorisation
          </li>
        </ul>
        <p className={styles.body}>
          Violations may result in immediate removal from the Programme without refund of any
          fees paid.
        </p>
      </div>

      {/* ── 4. Intellectual Property ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
        <p className={styles.body}>
          All training materials, presentations, toolkits, videos, and other content provided
          through the SheExports Programme (&ldquo;Programme Materials&rdquo;) are the intellectual property
          of MABA (Made in Africa Brands Ambassabor), Lagos State Ministry of Wealth Creation and Employment (LSETF), and the Lagos State Ministry of Wealth Creation and Employment (MWC&E) and/or their content partners. Participants are granted a limited,
          non-exclusive, non-transferable licence to use Programme Materials solely for their
          personal business development.
        </p>
        <p className={styles.body}>
          Participants may not reproduce, distribute, sell, or publicly display Programme
          Materials without prior written consent from the Programme organisers.
        </p>
      </div>

      {/* ── 5. Market Access & Funding Opportunities ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Market Access &amp; Funding Opportunities</h2>
        <p className={styles.body}>
          The Programme facilitates introductions to market access platforms and funding
          opportunities. However, we do not guarantee that any participant will secure a
          specific export contract, funding, or business outcome. Selection for funding or
          market access programmes is subject to the independent criteria of third-party
          platforms and funders.
        </p>
        <p className={styles.body}>
          The Programme organisers are not responsible for the terms, conditions, or outcomes
          of any agreement entered into between a participant and a third-party platform,
          funder, or buyer.
        </p>
      </div>

      {/* ── 6. Limitation of Liability ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
        <p className={styles.body}>
          To the fullest extent permitted by Nigerian law, MABA (Made in Africa Brands Ambassabor), Lagos State Ministry of Wealth Creation and Employment (LSETF), and the Lagos State Ministry of Wealth Creation and Employment (MWC&E) shall not be liable for any indirect,
          incidental, special, or consequential loss or damage arising from:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Participation in or withdrawal from the Programme</li>
          <li className={styles.listItem}>
            Reliance on training content, market information, or business advice provided
            through the Programme
          </li>
          <li className={styles.listItem}>
            Technical failures affecting access to online Programme resources
          </li>
          <li className={styles.listItem}>
            Actions of third-party partners, buyers, or funders introduced through the Programme
          </li>
        </ul>
      </div>

      {/* ── 7. Photography & Media ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Photography &amp; Media Consent</h2>
        <p className={styles.body}>
          By participating in Programme events, you grant MABA (Made in Africa Brands Ambassabor), Lagos State Ministry of Wealth Creation and Employment (LSETF), and the Lagos State Ministry of Wealth Creation and Employment (MWC&E) a royalty-free,
          non-exclusive licence to use photographs, videos, and audio recordings taken at
          Programme events for promotional, reporting, and impact documentation purposes.
          If you do not consent to being photographed or recorded, please notify the Programme
          team in writing before the event.
        </p>
      </div>

      {/* ── 8. Termination ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Termination &amp; Withdrawal</h2>
        <p className={styles.body}>
          You may withdraw from the Programme at any time by notifying the Programme
          team. The Programme organisers reserve the right to terminate a participant&apos;s
          enrolment for violation of these Terms, provision of false information, or any conduct
          deemed detrimental to the Programme or its participants.
        </p>
      </div>

      {/* ── 9. Governing Law ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Governing Law</h2>
        <p className={styles.body}>
          These Terms shall be governed by and construed in accordance with the laws of the
          Federal Republic of Nigeria. Any dispute arising from these Terms shall be subject to
          the exclusive jurisdiction of the courts of Lagos State, Nigeria.
        </p>
      </div>

      {/* ── 10. Changes to Terms ── */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Changes to These Terms</h2>
        <p className={styles.body}>
          We reserve the right to modify these Terms at any time. Changes will be communicated
          to registered participants via the contact details provided at registration. Continued
          participation after notification of changes constitutes acceptance of the revised Terms.
        </p>
      </div>

    </LegalLayout>
  );
}
