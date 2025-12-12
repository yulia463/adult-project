import styles from "@/components/TableOfContents/TableOfContents.module.scss";
import Button from "@/components/Button";
import BigRocket from "@/app/svg/BigRocket";

export default function TableOfContents() {
    return (
        <div className={styles.containerTableOfContents}>
            <div>Table of Contents</div>
            <div>Undress her free: How It Works?</div>
            <div className={styles.whiteContainer}>
                <div className={styles.descriptionOfContainer}>
                    <div className={styles.textUndress}>Undress her free:</div>
                    <div className={styles.textWorks}>How It Works?</div>
                </div>

                <div>
                    Our service is a sophisticated AI-powered app that learns from large amounts of online data. Using
                    complex algorithms, it can remove clothing in seconds thanks to its precise analysis of the human
                    body.
                    Our platform provides our users with a smooth undressing process, offering free undress photo.
                </div>
                <div>
                    <div>icon</div>
                    <div>A secure and innovative deepnude app</div>
                    <div>icon</div>
                    <div>Confidential registration with full data protection</div>
                </div>
                <div>
                    <Button size="M" variant="pink" icon={BigRocket}>Undress a photo</Button>
                </div>
                <div>All you need is an internet connection and the photo you want to undress. It is very simple for
                    you, without any unnecessary steps.
                </div>
                <div>foto</div>
                <div>line</div>
            </div>
        </div>
    );
}
