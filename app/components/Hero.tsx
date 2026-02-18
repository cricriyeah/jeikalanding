'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const YOUTUBE_VIDEO_ID = 'bb-pKN6HrY0';

const Hero = () => {
    const playerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load YouTube IFrame API script
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Create player when API is ready
        (window as any).onYouTubeIframeAPIReady = () => {
            new (window as any).YT.Player(playerRef.current, {
                videoId: YOUTUBE_VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    loop: 1,
                    playlist: YOUTUBE_VIDEO_ID,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    disablekb: 1,
                    playsinline: 1,
                    origin: window.location.origin,
                },
                events: {
                    onReady: (event: any) => {
                        event.target.mute();
                        event.target.playVideo();
                    },
                    onStateChange: (event: any) => {
                        // If video ends or pauses, try to play again
                        const YT = (window as any).YT;
                        if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
                            event.target.playVideo();
                        }
                    },
                },
            });
        };

        return () => {
            (window as any).onYouTubeIframeAPIReady = null;
        };
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.videoOverlay}></div>
            <div className={styles.videoWrapper}>
                <div ref={playerRef} className={styles.videoBackground}></div>
            </div>

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
