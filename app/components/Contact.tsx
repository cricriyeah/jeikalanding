'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className={styles.header}
                >
                    <h2 className={styles.heading}>Contacto</h2>
                    <div className={styles.divider}></div>
                </motion.div>

                <div className={styles.contentGrid}>
                    <motion.div
                        className={styles.infoColumn}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>Ponte en contacto</h3>
                        <p>Estamos listos para escuchar tu próximo proyecto.</p>

                        <div className={styles.contactItem}>
                            <Mail className={styles.icon} />
                            <span>info@jeandka.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone className={styles.icon} />
                            <span>+1 234 567 890</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin className={styles.icon} />
                            <span>Ciudad Design, Calle 123</span>
                        </div>

                        <h3 className={styles.socialsTitle}>Nuestras Redes Sociales</h3>
                        <div className={styles.socials}>
                            <div className={styles.socialIconWrapper}>
                                <Facebook className={styles.socialIcon} />
                            </div>
                            <div className={styles.socialIconWrapper}>
                                <Instagram className={styles.socialIcon} />
                            </div>
                            <div className={styles.socialIconWrapper}>
                                {/* Custom TikTok Icon since it might not be in all lucide versions */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.socialIcon}
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </div>
                            <div className={styles.socialIconWrapper}>
                                <Linkedin className={styles.socialIcon} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formColumn}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className={styles.form} suppressHydrationWarning>
                            <div className={styles.inputGroup}>
                                <input type="text" placeholder="Nombre" className={styles.input} suppressHydrationWarning />
                            </div>
                            <div className={styles.inputGroup}>
                                <input type="email" placeholder="Email" className={styles.input} suppressHydrationWarning />
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea placeholder="Mensaje" rows={4} className={styles.textarea} suppressHydrationWarning></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
                        </form>
                    </motion.div>
                </div>

                <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} JE&KA. Todos los derechos reservados.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
