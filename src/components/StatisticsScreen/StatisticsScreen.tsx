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
        image: "/img/ImgIcon.png",
        alt: "img",
    },
    {
        value: "170k+",
        text: "Bonuses, rewards, and incentives distributed to members",
        image: "/img/BonusIcon.png",
        alt: "bonus",
    },
    {
        value: "60k+",
        text: "New users joining our community every month",
        image: "/img/PersonIcon.png",
        alt: "user",
    },
    {
        value: "95k+",
        text: "Successful secure withdrawals processed",
        image: "/img/ArmIcon.png",
        alt: "arm",
    },
    {
        value: "$42+",
        text: "Average income earned from a single referral",
        image: "/img/PigIcon.png",
        alt: "pig",
    },
];


export default function StatisticsScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Why users rely on us</div>
            <div className={styles.blocksWrapper}>
            {STATISTICS.map((item, index) => (
                <div className={styles.bloks} key={index}>
                    <div>
                        <div className={styles.gradientNumber}>{item.value}</div>
                        <div className={styles.text}>{item.text}</div>
                    </div>

                    <div className={styles.iconWrapper}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={115}
                            height={115}
                            sizes="(max-width: 768px) 80px, 115px"
                        />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
