/**
 * layout.tsx — Root layout for the SheExport Next.js app.
 *
 * Sets up:
 *  - HTML lang attribute
 *  - Page metadata (title, description, favicon)
 *  - Global CSS import
 *  - Google Fonts are loaded via globals.css @import
 */

import type { Metadata } from 'next';
import './globals.css';

/* ── Page-level metadata ────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'SheExports 2026 | Produce. Add Value. Export.',
  description:
    'A catalyst for sustainable economic growth — empowering 10,000 women entrepreneurs in Lagos State through technical assistance, digital training, and market-access programmes.',
  keywords: ['SheExports', 'women entrepreneurs', 'Lagos', 'export', 'trade', 'MABA', 'LSETF'],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

/* ── Root Layout ────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* All page content is rendered here */}
        {children}
      </body>
    </html>
  );
}
