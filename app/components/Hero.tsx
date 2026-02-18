'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const VIDEO_URL = 'https://res.cloudinary.com/dkofkzzc5/video/upload/v1771451378/jeikavideo_1_s7zwoq.mp4';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force muted property (React bug: muted attribute may not apply correctly)
        video.defaultMuted = true;
        video.muted = true;
        (video as any).setAttribute('playsinline', '');
        (video as any).setAttribute('webkit-playsinline', '');

        const attemptPlay = () => {
            const p = video.play();
            if (p !== undefined) {
                p.catch(() => {
                    // If autoplay blocked, play on first user touch
                    const onTouch = () => {
                        video.play();
                        document.removeEventListener('touchstart', onTouch);
                        document.removeEventListener('scroll', onTouch);
                    };
                    document.addEventListener('touchstart', onTouch, { once: true, passive: true });
                    document.addEventListener('scroll', onTouch, { once: true, passive: true });
                });
            }
        };

        // Try playing immediately, and also when data is available
        attemptPlay();
        video.addEventListener('loadeddata', attemptPlay, { once: true });
        video.addEventListener('canplay', attemptPlay, { once: true });
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.videoOverlay}></div>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
                ref={videoRef}
                className={styles.videoBackground}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                webkit-playsinline="true"
            >
                <source src={VIDEO_URL} type="video/mp4" />
            </video>

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
