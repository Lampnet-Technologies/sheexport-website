/**
 * Event.tsx
 *
 * "The Event" section — conference details and contact information.
 *
 */

import Image from 'next/image';
import styles from './Event.module.css';

export default function Event() {
  return (
    /* id="event" — linked from navbar "Event" */
    <section id="event" className={styles.event}>
      <div className="container">

        {/* ── Outer dashed-border wrapper ── */}
        <div className={styles.outerCard}>

          {/* ── "The Event" heading — red, Playfair Display, centred ── */}
          <h2 className={styles.sectionHeading}>The Event</h2>

          {/* ── CENTRE: Flyer image — no card background ── */}
          <div className={styles.flyerCol}>
            <Image
              src="/images/event-flyer2.png"
              alt="sheEXports Conference 2026 flyer"
              width={1260}
              height={1260}
              className={styles.flyer}
            />
          </div>

        </div>{/* end .outerCard */}
      </div>
    </section>
  );
}
