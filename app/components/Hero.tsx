'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const CLOUDINARY_VIDEO_URL = 'https://res.cloudinary.com/dkofkzzc5/video/upload/v1771451378/jeikavideo_1_s7zwoq.mp4';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.videoOverlay}></div>
            <video
                className={styles.videoBackground}
                src={CLOUDINARY_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className={styles.logoContainer}>
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
