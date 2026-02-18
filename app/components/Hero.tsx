'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.videoOverlay}></div>
            <iframe
                src="https://www.youtube.com/embed/bb-pKN6HrY0?autoplay=1&mute=1&loop=1&playlist=bb-pKN6HrY0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
                className={styles.videoBackground}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Hero Video"
            ></iframe>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className={styles.logoContainer}>
                    {/* Placeholder for the "X" logo design from sketch */}
                    <div className={styles.sketchLogo}>
                        <span className={styles.logoText}>JE&KA</span>
                    </div>
                </div>

                <h1 className={styles.title}>
                    Exclusividad &<br />Bienes Raíces
                </h1>

                <p className={styles.subtitle}>
                    Encuentra la propiedad de tus sueños con la asesoría experta que mereces.
                </p>

                <a href="#contact">
                    <motion.button
                        className={styles.ctaButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contáctanos
                    </motion.button>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
