"use client";
import HeaderTabs from "@/components/Headers/HeaderTabs";
import Button from "@/components/Button";
import styles from "../Headers/HeaderForMainScreen.module.scss";
import {useState} from "react";


// export default function HeaderForMainScreen() {
//     return (
//         <div className={styles.container}>
//             <div className={styles.title}>
//                 <div className={styles.firstWorld}>Undress</div>
//                 <div className={styles.secondWorld}>her</div>
//             </div>
//             <HeaderTabs/>
//             <div style={{ marginTop: "20px" }}>
//                 <Button size="M" variant="dark">
//                   <div className={styles.btnText}>Try now</div>
//                 </Button>
//         </div>
//         </div>
//     );
// }




export default function HeaderForMainScreen() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<number | null>(null);

    const tabs: string[] = [
        "Home",
        "How to Use AI Undress App?",
        "AI Clothes Remover Tool",
        "FAQ",
    ];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        // теперь меню не закрывается при клике на таб
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>
                    <div className={styles.firstWorld}>Undress</div>
                    <div className={styles.secondWorld}>her</div>
                </div>

                {/* Бургер */}
                <div
                    className={styles.burger}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.grayLine}></div>

            {/* Десктопная версия */}
            <div className={styles.desktopMenu}>
                <div className={styles.tabs}>
                    {tabs.map((tab, index) => (
                        <div key={index} className={styles.tab}>
                            {tab}
                        </div>
                    ))}
                </div>
                <div className={styles.desktopButtonWrapper}>
                    <Button size="M" variant="dark">Try now</Button>
                </div>
            </div>

            {/* Мобильное меню */}
            {isMobileMenuOpen && (
                <div className={styles.mobileDropdown}>
                    <div className={styles.tabsWrapper}>
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`${styles.mobileTab} ${
                                    activeTab === index ? styles.activeTab : ""
                                }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>


                    <div className={styles.mobileButtonWrapper}>
                        <Button size="S" variant="dark">Try now</Button>
                    </div>
                </div>
            )}
        </div>
    );
}


