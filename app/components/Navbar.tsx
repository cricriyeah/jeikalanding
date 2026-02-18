'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <div className={styles.logo}>JE&KA</div>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    <a href="#hero" className={styles.link}>Inicio</a>
                    <a href="#about" className={styles.link}>Acerca de nosotros</a>
                    <a href="#contact" className={`${styles.link} ${styles.contactBtn}`}>Contacto</a>
                </div>

                {/* Mobile Menu Button */}
                <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
                    {isOpen ? <X size={30} color="#c5a059" /> : <Menu size={30} color="#c5a059" />}
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href="#hero" className={styles.mobileLink} onClick={toggleMenu}>Inicio</a>
                            <a href="#about" className={styles.mobileLink} onClick={toggleMenu}>Acerca de nosotros</a>
                            <a href="#contact" className={styles.mobileLink} onClick={toggleMenu}>Contacto</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
