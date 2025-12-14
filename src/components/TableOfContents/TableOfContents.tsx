"use client";

import styles from "@/components/TableOfContents/TableOfContents.module.scss";
import Button from "@/components/Button";
import BigRocket from "@/app/svg/BigRocket";
import Image from "next/image";
import CloudIcon from "@/app/svg/CloudIcon";
import {useEffect, useState} from "react";
import SmallRocket from "@/app/svg/SmallRocket";

const TABS = [
    "Undress her free: How It Works?",
    "Why users rely on us",
    "Discover Undress Her AI Modes",
    "Results of Free AI Undresser",
    "How to Use AI Undress App?",
];


export default function TableOfContents() {
    const [activeTab, setActiveTab] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 769);
        handleResize(); // проверка при монтировании
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.containerTableOfContents}>
            {/* Tabs */}
            <div className={styles.tabsWrapper}>
                {TABS.map((tab, index) => (
                    <div
                        key={tab}
                        className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* White container */}
            <div className={styles.whiteContainer}>
                <div className={styles.desktopLayout}>
                    {/* LEFT COLUMN */}
                    <div className={styles.leftColumn}>
                        <div className={styles.descriptionOfContainer}>
                            <div className={styles.textUndress}>Undress her free:</div>
                            <div className={styles.textWorks}>How It Works?</div>
                        </div>

                        <div className={styles.aboutService}>
                            Our service is a sophisticated AI-powered app that learns from large amounts of online data.
                            Using
                            complex algorithms, it can remove clothing in seconds thanks to its precise analysis of the
                            human
                            body. Our platform provides our users with a smooth undressing process, offering <br/> free
                            undress photo.
                        </div>


                        <div className={styles.iconAndBlueText}>
                            <div className={styles.divIconAndBlueText}>
                                <div className={styles.smallIcon}>
                                    <Image src="/img/MenIcon.png" alt="Men Icon" fill/>
                                </div>
                                <div className={styles.blueText}>A secure and innovative deepnude app</div>
                            </div>

                            <div className={styles.divIconAndBlueText}>
                                <div className={styles.smallIcon}>
                                    <Image src="/img/CirclLikeIcon.png" alt="Circle Like Icon" fill/>
                                </div>
                                <div className={styles.blueText}>Confidential registration with full data protection
                                </div>
                            </div>

                        </div>
                        <div className={styles.buttonWrapper}>
                            <Button
                                icon={isDesktop ? BigRocket : SmallRocket}
                                size={isDesktop ? "M" : "S"}
                                variant="pink"
                            >
                                Undress a photo
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={styles.rightColumn}>
                        {/* Текст и фото в правой колонке */}
                        <div className={styles.allText}>
                        All you need is an internet connection and the photo you want to undress. It is very simple for you,
                            without any unnecessary steps.
                        </div>

                        <div className={styles.cloudAndWomenContainer}>
                            <div className={styles.pinkContainer}>
                                <CloudIcon/>
                            </div>
                            <div className={styles.womenClip}>
                                <div className={styles.womenImage}>
                                    <Image src="/img/PinkWomen.png" alt="Pink Women" fill/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.grayLine}></div>
        </div>
    );

}
