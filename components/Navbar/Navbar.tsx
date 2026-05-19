/**
 * Navbar.tsx
 *
 * Sticky top navigation bar for SheExports 2026.
 * - Left: logo image (public/images/logo.png)
 * - Centre: nav links that smooth-scroll to their section
 * - Right: "REGISTER NOW" CTA button (links to Google Form)
 *
 * Background: var(--color-cream) #FFF8F4
 * Accent:     var(--color-red)   #AB0029
 */

'use client'; // needed for smooth-scroll click handler

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

/* ── Google Form URLs — replace with actual links ──────────── */
const REGISTER_URL = 'https://forms.gle/HoAnsNEDqDVDZyiw9'; // TODO: replace with real form URL

/* ── Navigation links — href matches section id ────────────── */
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Implementation Partners', href: '#partners' },
  { label: 'Partner/Sponsor', href: '#partner-sponsor' },
  { label: 'Event', href: '#event' },
  { label: 'Contact Us', href: '#contact' }, // replaced in Footer, kept for nav
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Smooth-scroll to the target section when a nav link is clicked.
   * Uses native browser scroll behaviour enabled in globals.css via html { scroll-behavior: smooth }.
   */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        {/* ── Logo ── */}
        <Link href="/" className={styles.logoLink} aria-label="SheExports home">
          <Image
            src="/images/logo2.png"
            alt="SheExports logo"
            width={80}
            height={40}
            priority
            className={styles.logo}
          />
        </Link>

        {/* ── Desktop nav links ── */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Register CTA ── */}
        <Link
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-red ${styles.registerBtn}`}
        >
          Register Now
        </Link>

        {/*  Mobile menu toggle button (hamburger/close icon) */}
        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
      >
        <ul className={styles.mobileNavList}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
