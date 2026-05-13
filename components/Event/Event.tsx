/**
 * Event.tsx
 *
 * "The Event" section — conference details and contact information.
 *
 * Layout (matches design exactly):
 *  - Section background: var(--color-peach) #FFF1E6
 *  - Outer wrapper: dashed blue border, rounded corners
 *  - "The Event" heading: red, Playfair Display, centred
 *  - Three-column body:
 *      LEFT   — white card: "Event Details" (red heading) + date/time/venue rows
 *      CENTRE — flyer image only, no card wrapper, slightly raised/overlapping
 *      RIGHT  — white card: "Contact Information" (red heading) + contacts + email/website
 *
 * Contacts:
 *  - Flora Mbeledeogu  +2348095566997
 *  - Sherifah Balogun  +2347032436478
 *  - Email: mabatribe007@gmail.com
 *  - Website: www.maba.africa
 */

import Image  from 'next/image';
import { Calendar, Clock, MapPin, Mail, Globe } from 'lucide-react';
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

          {/* ── Three-column body ── */}
          <div className={styles.columns}>

            {/* ── LEFT: Event Details white card ── */}
            <div className={styles.sideCard}>
              <h3 className={styles.cardHeading}>Event Details</h3>

              {/* DATE row */}
              <div className={styles.detailRow}>
                <Calendar size={20} strokeWidth={1.5} aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.detailLabel}>DATE</p>
                  <p className={styles.detailValue}>Saturday, 27th June 2026</p>
                </div>
              </div>

              {/* TIME row */}
              <div className={styles.detailRow}>
                <Clock size={20} strokeWidth={1.5} aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.detailLabel}>TIME</p>
                  <p className={styles.detailValue}>10:00 am</p>
                </div>
              </div>

              {/* VENUE row */}
              <div className={styles.detailRow}>
                <MapPin size={20} strokeWidth={1.5} aria-hidden="true" className={styles.icon} />
                <div>
                  <p className={styles.detailLabel}>VENUE</p>
                  <p className={styles.detailValue}>
                    Oriental hotel, Victoria Island –{' '}
                    <br />Lagos
                  </p>
                </div>
              </div>
            </div>

            {/* ── CENTRE: Flyer image — no card background ── */}
            <div className={styles.flyerCol}>
              <Image
                src="/images/event-flyer.png"
                alt="sheEXports Conference 2026 flyer"
                width={260}
                height={340}
                className={styles.flyer}
              />
            </div>

            {/* ── RIGHT: Contact Information white card ── */}
            <div className={styles.sideCard}>
              <h3 className={styles.cardHeading}>Contact Information</h3>

              {/* Contact 1: Flora */}
              <div className={styles.contactBlock}>
                <p className={styles.contactName}>Flora Mbeledeogu</p>
                <p className={styles.contactPhone}>+2348095566997</p>
              </div>

              {/* Contact 2: Sherifah */}
              <div className={styles.contactBlock}>
                <p className={styles.contactName}>Sherifah Balogun</p>
                <p className={styles.contactPhone}>+2347032436478</p>
              </div>

              {/* Horizontal divider */}
              <hr className={styles.divider} />

              {/* Email link */}
              <a href="mailto:mabatribe007@gmail.com" className={styles.contactLink}>
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" className={styles.linkIcon} />
                <span>mabatribe007@gmail.com</span>
              </a>

              {/* Website link */}
              <a
                href="https://www.maba.africa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Globe size={15} strokeWidth={1.8} aria-hidden="true" className={styles.linkIcon} />
                <span>www.maba.africa</span>
              </a>
            </div>

          </div>{/* end .columns */}
        </div>{/* end .outerCard */}
      </div>
    </section>
  );
}
