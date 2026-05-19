/**
 * Contact.tsx
 *
 * "Contact Information" section.
 *
 * Layout:
 *  - Section background: var(--color-peach) #FFF1E6
 *  - White rounded card, centred on the page
 *  - "Contact Information" heading: red, Playfair Display, centred
 *  - Two equal columns divided by a vertical rule:
 *      LEFT  — For Partnership (email + phone)
 *      RIGHT — For Sponsorship (email + phone)
 *  - Column headings: Inter bold, dark
 *  - Email and phone: Inter regular, mid-grey, centred
 */

import styles from './Contact.module.css';

/* ── Contact data — update emails/phones as needed ─────────── */
const CONTACTS = [
    {
        role: 'For Partnership',
        email: 'Partnership@sheexports.africa',
        phone: '+2347025001143',
    },
    {
        role: 'For Sponsorship',
        email: 'Sponsorship@sheexports.africa',
        phone: '+2347025001143',
    },
];

export default function Contact() {
    return (
        /* id="contact" — use as anchor target in Navbar or Footer */
        <section id="contact" className={styles.contact}>
            <div className="container">

                {/* ── White rounded card ── */}
                <div className={styles.card}>

                    {/* ── Heading ── */}
                    <h2 className={styles.heading}>Contact Information</h2>

                    {/* ── Two-column split ── */}
                    <div className={styles.columns}>
                        {CONTACTS.map(({ role, email, phone }) => (
                            <div key={role} className={styles.col}>
                                <p className={styles.role}>{role}</p>
                                <a href={`mailto:${email}`} className={styles.detail}>{email}</a>
                                <a href={`tel:${phone}`} className={styles.detail}>{phone}</a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}