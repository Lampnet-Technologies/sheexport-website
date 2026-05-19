/**
 * faq/page.tsx
 *
 * Frequently Asked Questions page for SheExports 2026.
 * Route: /faq
 *
 * Uses LegalLayout for the shared header / hero / footer shell
 * and LegalContent styles for FAQ-specific typography
 * (.faqItem, .question, .answer).
 *
 * Questions are grouped by topic, each group rendered as a
 * .section block with a red Playfair Display heading.
 */

import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout/LegalLayout';
import styles      from '@/components/LegalLayout/LegalContent.module.css';

/* ── Page metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'FAQ | SheExports 2026',
  description:
    'Answers to frequently asked questions about the SheExports 2026 Initiative — eligibility, training, events, and more.',
};

/* ── FAQ data: grouped by topic ─────────────────────────────── */
const FAQ_GROUPS: {
  topic: string;
  items: { q: string; a: string }[];
}[] = [
  {
    topic: 'About the Programme',
    items: [
      {
        q: 'What is SheExports 2026?',
        a: 'SheExports 2026 is a flagship initiative co-led by MABA (Made in Africa Brands Ambassador), the Lagos State Ministry of Wealth Creation and Employment, and the Lagos State Employment Trust Fund (LSETF). It is designed to empower 10,000 women entrepreneurs in Lagos State over five years (2026–2031) by equipping them with the technical skills, market access, and funding connections needed to grow export-ready businesses.',
      },
      {
        q: 'Who is behind SheExports?',
        a: 'The initiative is driven by MABA in collaboration with the Lagos State Ministry of Wealth Creation and Employment (MWC&E) and the Lagos State Employment Trust Fund (LSETF). It is executed through a network of implementing partners spanning government agencies, development finance institutions, and private sector organisations.',
      },
      {
        q: 'What are the key goals of the programme?',
        a: 'The programme aims to (1) build export and digital trade skills among women-led businesses, (2) facilitate access to international markets for value-added Nigerian products, (3) connect participants with trade finance and funding opportunities, and (4) generate measurable economic impact over a 5-year period across Lagos State.',
      },
    ],
  },
  {
    topic: 'Eligibility & Registration',
    items: [
      {
        q: 'Who can apply to SheExports 2026?',
        a: 'The programme is open to women entrepreneurs aged 18 and above who own or co-own a business — registered or unregistered — operating within Lagos State. Applicants at any business stage (idea, early-stage, or established) are welcome, particularly those with products or services that have export potential.',
      },
      {
        q: 'Is there a fee to participate?',
        a: 'No. The training programme and event are fully funded. There are no fees to register, attend training sessions, or participate in the sheEXports Conference 2026. There are only special fees for exhibition space at the conference, which are waived for training participants.',
      },
      {
        q: 'How do I apply for the training?',
        a: 'You can apply by clicking the "Apply for Training" button on this website. The application form will ask for basic information about you and your business. Shortlisted applicants will be notified via the contact details provided.',
      },
      {
        q: 'How do I register to attend the sheEXports Conference 2026?',
        a: 'Click the "Register to Attend" button on the home page to complete your event registration. The conference holds on Saturday, 27th June 2026 at the Oriental Hotel, Victoria Island, Lagos. Attendance is free but spaces are limited.',
      },
      {
        q: 'Can I register to attend the conference without applying for training?',
        a: 'Yes. The conference and the training programme are separate. You may attend the conference without enrolling in the training course, and vice versa.',
      },
    ],
  },
  {
    topic: 'Training & Course Content',
    items: [
      {
        q: 'What does the training cover?',
        a: 'The 6-week programme covers: Generative AI for digital marketing; understanding export and international trade; B2B buyer engagement and logistics; rules of origin and trade regulations; access to funding and financial management; and investment readiness. Each week combines expert-led sessions with practical exercises.',
      },
      {
        q: 'When does the training start and how long does it run?',
        a: 'Training runs for 6 weeks. Sessions are structured to accommodate working entrepreneurs, with a mix of in-person workshops and online resources.',
      },
      {
        q: 'Will I receive a certificate?',
        a: 'Yes. Participants who complete at least 80% of the training modules will receive a Certificate of Completion co-issued by MABA and LSETF. The certificate recognises your training in export readiness and digital trade skills.',
      },
      {
        q: 'What happens if I miss a session?',
        a: 'We understand that entrepreneurs have demanding schedules. If you miss a session, please notify the Programme team in advance. Recorded materials and catch-up resources will be made available where possible. A minimum of 80% attendance is required for certification.',
      },
    ],
  },
  {
    topic: 'The Event',
    items: [
      {
        q: 'What is the sheEXports Conference 2026?',
        a: 'The sheEXports Conference 2026 is the flagship event of the initiative, bringing together women entrepreneurs, policymakers, trade experts, development finance institutions, and private sector partners. It features keynote addresses, panel discussions, a product showcase, and networking sessions focused on export-led growth.',
      },
      {
        q: 'Where and when is the conference?',
        a: 'The conference holds on Saturday, 27th June 2026 at 10:00 am at the Oriental Hotel, Victoria Island, Lagos, Nigeria.',
      },
      {
        q: 'Will there be an opportunity to exhibit my products?',
        a: 'Yes. A product showcase will be available for women entrepreneurs to display export-ready goods and services. Details on applying for exhibition space will be communicated to registered participants closer to the event date.',
      },
    ],
  },
  {
    topic: 'Market Access & Funding',
    items: [
      {
        q: 'What market access opportunities are available through the programme?',
        a: 'Participants gain access to an international marketplace platform designed to connect Nigerian value-added products and services with buyers across Africa, Europe, the Middle East, and beyond. The programme also facilitates introductions to trade missions, export platforms, and B2B buyer networks.',
      },
      {
        q: 'What funding support can I access?',
        a: 'The programme creates pathways to trade finance, working capital support, and grant opportunities through LSETF and partner development finance institutions. Funding access is competitive and subject to the eligibility criteria of individual funding programmes.',
      },
      {
        q: 'Does the programme guarantee me a buyer or a loan?',
        a: 'No. The programme facilitates connections and equips you with the skills to pursue these opportunities. However, securing a buyer contract, trade finance, or grant is subject to your business performance, the independent decisions of third-party partners, and applicable eligibility criteria.',
      },
    ],
  },
  {
    topic: 'Partners & Sponsorship',
    items: [
      {
        q: 'How can my organisation become an implementing partner?',
        a: 'Organisations interested in becoming implementing partners — whether as technical assistance providers, market access platforms, or funding institutions — are encouraged to reach out via the "Become a Partner" form on this website. The Programme team will review your expression of interest and be in touch.',
      },
      {
        q: 'How can my company sponsor SheExports 2026?',
        a: 'Corporate sponsors play a vital role in expanding the programme\'s reach and impact. Sponsorship packages are available at different tiers, each with associated visibility and engagement benefits. Complete the "Become a Partner" form on this website and our team will share a detailed sponsorship prospectus.',
      },
    ],
  },
];

/* ── Page component ─────────────────────────────────────────── */
export default function FaqPage() {
  return (
    <LegalLayout title="Frequently Asked Questions">

      {FAQ_GROUPS.map(({ topic, items }) => (
        <div key={topic} className={styles.section}>

          {/* Topic group heading — red Playfair Display */}
          <h2 className={styles.sectionTitle}>{topic}</h2>

          {/* Q&A items */}
          {items.map(({ q, a }) => (
            <div key={q} className={styles.faqItem}>
              <p className={styles.question}>{q}</p>
              <p className={styles.answer}>{a}</p>
            </div>
          ))}

        </div>
      ))}

    </LegalLayout>
  );
}
