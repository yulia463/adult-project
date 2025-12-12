import HeaderForMainScreen from "@/components/Headers/HeaderForMainScreen";
import styles from "../MainScreen/MainScreen.module.scss";
import Button from "@/components/Button";
import BigRocket from "@/app/svg/BigRocket";
import Women from "@/app/svg/Women";

export default function MainScreen() {
    return (
        <div className={styles.containerMainScreen}>
            <div><HeaderForMainScreen/></div>
            <div className={styles.textContainer}>
                <div className={styles.textRevolut}>Revolutionary AI</div>
                <div className={styles.textUndressing}>for Undressing Girls</div>
            </div>
            <div className={styles.textAndFotoAndBtn}>
                <div className={styles.textAndTextDescription}>
                    <div className={styles.text}>Undressher: The Best Decision of Your Life</div>
                    <div className={styles.textDescription}>This is a tool that allows you to create photos online.
                        Photos are created realistically using deep learning technologies. Artificial intelligence uses
                        existing photos to make new ones based on them. Try to use it now and surprise yourself with new
                        possibilities!
                    </div>
                </div>
                <div className={styles.foto}><Women/></div>
                <div className={styles.btn}>
                    <Button size="M" variant="pink" icon={BigRocket}>
                        <div className={styles.btnText}>Free Undressher Online</div>
                    </Button>
                </div>
            </div>
        </div>
    );
}
