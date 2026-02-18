'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import styles from './About.module.css';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        } else {
            motionValue.set(0);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className={styles.statNumber}>0{suffix}</span>;
};

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.imageWrapper}>
                        {/* Using the user provided image */}
                        <img src="/imagen1.jpg" alt="Luxury Interior" className={styles.image} />
                        <div className={styles.imageOverlay}></div>
                    </div>
                    <div className={styles.floatingBox}>
                        <Counter value={15} suffix="+" />
                        <span className={styles.floatingLabel}>Años de Experiencia</span>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.contentWrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className={styles.heading}>Redefiniendo el <span className={styles.goldText}>Lujo</span></h2>
                    <div className={styles.divider}></div>

                    <p className={styles.text}>
                        En <strong>JE&KA</strong>, no solo vendemos propiedades; curamos estilos de vida. Nuestra pasión por la excelencia y el detalle nos ha posicionado como líderes en el mercado de bienes raíces de alta gama.
                    </p>
                    <p className={styles.text}>
                        Cada propiedad en nuestro portafolio es seleccionada minuciosamente para garantizar que cumpla con los estándares más exigentes de diseño, ubicación y exclusividad.
                    </p>

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <Counter value={250} suffix="+" />
                            <span className={styles.statLabel}>Propiedades Vendidas</span>
                        </div>
                        <div className={styles.statItem}>
                            <Counter value={98} suffix="%" />
                            <span className={styles.statLabel}>Clientes Satisfechos</span>
                        </div>
                    </div>

                    <a href="#contact">
                        <motion.button
                            className={styles.learnMoreBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contáctanos
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
