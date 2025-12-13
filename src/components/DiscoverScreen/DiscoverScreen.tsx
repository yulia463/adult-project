import styles from "./DiscoverScreen.module.scss";
import Button from "@/components/Button";
import SmallRocket from "@/app/svg/SmallRocket";
import Image from "next/image";

const CARDS = [
    {
        title: "Undress AI",
        description: "A tool for creating stylized digital images and experimenting with visual effects.",
        image: "/img/NakedWomen.png",
        alt: "Undress AI 1",
    },
    {
        title: "Sex poses ",
        description: "pre-designed different sex poses to help users shape composition and explore creative concepts.",
        image: "/img/BikiniWomen.png",
        alt: "Undress AI 2",
    },
    {
        title: "NSFW AI",
        description: "allows working with adult-themed visuals safely in a digital environment.",
        image: "/img/BedWomen.png",
        alt: "Undress AI 3",
    },
    {
        title: "Deep fake",
        description: "advanced image manipulation for realistic transformations and artistic experimentation.",
        image: "/img/Men.png",
        alt: "Undress AI 4",
    },
];

export default function DiscoverScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.blackContainer}>
                <div className={styles.header}>
                    <div className={styles.title}>Discover Undress Her AI Modes</div>
                    <div className={styles.description}>
                        The functionality of the Undressher module on ai-deep-nude.com exceeds expectations: high-quality detailing, accurate shape recognition, high level of adaptation to the original image.
                    </div>
                </div>

                <div className={styles.cardsWrapper}>
                    {CARDS.map((card, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.cardImg}>
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    width={300}
                                    height={300}
                                    sizes="(max-width: 768px) 150px, 300px"
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>{card.title}</div>
                                <div className={styles.cardDescription}>{card.description}</div>
                                <div className={styles.cardBtn}>
                                    <Button icon={SmallRocket} size="S">
                                        Try for free
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
