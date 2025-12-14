"use client";
import styles from "../Headers/HeaderForMainScreen.module.scss";
import {useEffect, useState} from "react";
import Button from "@/components/Button";

export default function HeaderForMainScreen() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<number | null>(null);
    const tabs: string[] = [
        "Home",
        "How to Use AI Undress App?",
        "AI Clothes Remover Tool",
        "FAQ",
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none"; // важно для iOS
        } else {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [isOpen]);

    return (
        <div className={styles.headerLayout}>
            <header className={styles.navbar}>
                <div className={styles.title}>
                    <div className={styles.firstWorld}>Undress</div>
                    <div className={styles.secondWorld}>her</div>
                </div>

                <nav className={styles.desktopNav}>
                    <div className={styles.desktopNavContent}>
                        <div className={styles.desktopNavLinks}>
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tab} ${
                                        activeTab === index ? styles.activeTab : ""
                                    }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>

                </nav>
                <div className={styles.desktopButton}>
                    <Button size="M" variant="dark">Try now</Button>
                </div>

                <button
                    className={styles.burger}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="Open menu"
                >
                    <span/>
                    <span/>
                    <span/>
                </button>
            </header>

            <div
                className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {isOpen && (
                <aside className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.mobileDropdown}>
                        <div className={styles.tabsWrapper}>
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`${styles.mobileTab} ${
                                        activeTab === index ? styles.activeTab : ''
                                    }`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>

                        <div className={styles.mobileButtonWrapper}>
                            <Button size="M" variant="dark">Try now</Button>
                        </div>
                    </div>
                </aside>
            )}

        </div>
    );
}


