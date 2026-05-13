/**
 * page.tsx — Landing page for SheExports 2026.
 *
 * Each section is a self-contained component with its own CSS module.
 * Sections appear in the order they are stacked on the page.
 */

import Navbar              from '@/components/Navbar/Navbar';
import Hero                from '@/components/Hero/Hero';
import About               from '@/components/About/About';
import Scope               from '@/components/Scope/Scope';
import CourseOutline       from '@/components/CourseOutline/CourseOutline';
import Event               from '@/components/Event/Event';
import ImplementingPartners from '@/components/ImplementingPartners/ImplementingPartners';
import Partnership         from '@/components/Partnership/Partnership';
import Footer              from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <main>
      {/* ── Fixed / sticky navigation bar ── */}
      <Navbar />

      {/* ── Hero / banner section ── */}
      <Hero />

      {/* ── About the programme ── */}
      <About />

      {/* ── Scope of Work & Project Components ── */}
      <Scope />

      {/* ── Course Outline ── */}
      <CourseOutline />

      {/* ── The Event details ── */}
      <Event />

      {/* ── Implementing Partners logos ── */}
      <ImplementingPartners />

      {/* ── Join Our Mission / Partnership CTA ── */}
      <Partnership />

      {/* ── Page footer ── */}
      <Footer />
    </main>
  );
}
