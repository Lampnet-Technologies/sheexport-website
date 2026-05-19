/**
 * LegalLayout.tsx
 *
 * Shared wrapper used by Privacy Policy, Terms of Service, and FAQ pages.
 *
 * Structure:
 *  ┌─────────────────────────────────┐
 *  │  Slim header bar (logo + back)  │  ← cream bg, red accent
 *  ├─────────────────────────────────┤
 *  │  Yellow hero strip (title)      │  ← Playfair Display
 *  ├─────────────────────────────────┤
 *  │  White content area             │  ← children rendered here
 *  ├─────────────────────────────────┤
 *  │  Minimal footer                 │
 *  └─────────────────────────────────┘
 *
 * Props:
 *  - title      — page heading shown in the hero strip
 *  - lastUpdated — optional "Last updated: …" string
 *  - children   — page body content
 */

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import styles from './LegalLayout.module.css';

interface LegalLayoutProps {
    title: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

const YEAR = new Date().getFullYear();

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <div className={styles.page}>

            {/* ── Slim top bar ── */}
            <header className={styles.topBar}>
                <div className={`container ${styles.topBarInner}`}>
                    {/* Logo — links back to home */}
                    <Link href="/" aria-label="Back to SheExports home">
                        <Image
                            src="/images/logo.png"
                            alt="SheExports logo"
                            width={80}
                            height={40}
                            className={styles.logo}
                            priority
                        />
                    </Link>

                    {/* Back link */}
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* ── Yellow hero strip with page title ── */}
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>{title}</h1>
                    {lastUpdated && (
                        <p className={styles.lastUpdated}>Last updated: {lastUpdated}</p>
                    )}
                </div>
            </div>

            {/* ── Main content area ── */}
            <main className={styles.main}>
                <div className={`container ${styles.contentWrap}`}>
                    {children}
                </div>
            </main>

            {/* ── Minimal footer ── */}
            <footer className={styles.footer}>
                <div className={`container ${styles.footerInner}`}>
                    <p className={styles.footerText}>
                        &copy; {YEAR} sheEXports Initiative. A collaboration between MABA, LSETF, and MWC&E.
                    </p>
                    <nav className={styles.footerNav} aria-label="Legal pages">
                        <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
                        <Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
                        <Link href="/faq" className={styles.footerLink}>FAQ</Link>
                    </nav>
                </div>
            </footer>

        </div>
    );
}