import styles from "./StatisticsScreen.module.scss";
import Image from "next/image";


const STATISTICS = [
    {
        value: "85k+",
        text: "Users who stay active on our platform every day",
        image: "/img/ManIcon.png",
        alt: "Active users",
    },
    {
        value: "120k+",
        text: "Images created and enhanced through AI technology",
        image: "/img/WomanIcon.png",
        alt: "img",
    },
    {
        value: "170k+",
        text: "Bonuses, rewards, and incentives distributed to members",
        image: "/img/LikeIcon.png",
        alt: "bonus",
    },
    {
        value: "60k+",
        text: "New users joining our community every month",
        image: "/img/TimerIcon.png",
        alt: "user",
    },
    {
        value: "95k+",
        text: "Successful secure withdrawals processed",
        image: "/img/WorldIcon.png",
        alt: "arm",
    },
    {
        value: "$42+",
        text: "Average income earned from a single referral",
        image: "/img/SupportIcon.png",
        alt: "pig",
    },
];


export default function StatisticsScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Why users rely on us</div>
            <div className={styles.bloks}>
                <div className={styles.descriptions}>
                    <div className={styles.gradientNumber}>85k+</div>
                    <div className={styles.text}>Users who stay active on our platform every day</div>
                </div>
                <div>
                    <Image
                        src="/img/ManIcon.png"
                        alt="Men Icon"
                        width={80}
                        height={80}
                    />
                </div>
            </div>
        </div>
    );
}
