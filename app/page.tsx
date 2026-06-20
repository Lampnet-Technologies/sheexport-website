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
import Exhibit             from '@/components/Exhibit/Exhibit';
import Contact             from '@/components/Contact/Contact';
import ImplementingPartners from '@/components/ImplementingPartners/ImplementingPartners';
import Partnership         from '@/components/Partnership/Partnership';
import Footer              from '@/components/Footer/Footer';
import FadeIn              from '@/components/FadeIn/FadeIn';

export default function HomePage() {
  return (
    <main>
      {/* ── Fixed / sticky navigation bar ── */}
      <Navbar />

      {/* ── Hero / banner section ── */}
      <FadeIn delay={150}>
        <Hero />
      </FadeIn>

      {/* ── About the programme ── */}
      <FadeIn>
        <About />
      </FadeIn>

      {/* ── Scope of Work & Project Components ── */}
      <FadeIn>
        <Scope />
      </FadeIn>

      {/* ── Course Outline ── */}
      <FadeIn>
        <CourseOutline />
      </FadeIn>

      {/* ── The Event details ── */}
      <FadeIn>
        <Event />
      </FadeIn>

      {/* ── Exhibit Section ── */}
      <FadeIn>
        <Exhibit />
      </FadeIn>

      {/* ── Contact section ── */}
      <FadeIn>
        <Contact />
      </FadeIn>

      {/* ── Implementing Partners logos ── */}
      <FadeIn>
        <ImplementingPartners />
      </FadeIn>

      {/* ── Join Our Mission / Partnership CTA ── */}
      <FadeIn>
        <Partnership />
      </FadeIn>

      {/* ── Page footer ── */}
      <Footer />
    </main>
  );
}

