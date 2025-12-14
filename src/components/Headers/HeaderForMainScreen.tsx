"use client";
import styles from "../Headers/HeaderForMainScreen.module.scss";
import {useState} from "react";
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
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

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
                                <div key={index} className={styles.tab}>
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>
                        <Button size="M" variant="dark">Try now</Button>
                </nav>

                <button
                    className={styles.burger}
                    onClick={() => setIsOpen(!isOpen)}
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
                                    onClick={() => {
                                        handleTabClick(index);
                                        setIsOpen(false);
                                    }}
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


