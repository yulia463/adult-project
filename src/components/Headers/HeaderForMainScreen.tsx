import HeaderTabs from "@/components/Headers/HeaderTabs";
import Button from "@/components/Button";
import styles from "../Headers/HeaderForMainScreen.module.scss";

export default function HeaderForMainScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.firstWorld}>Undress</div>
                <div className={styles.secondWorld}>her</div>
            </div>
            <HeaderTabs/>
            <div style={{ marginTop: "20px" }}>
                <Button size="M" variant="dark">
                  <div className={styles.btnText}>Try now</div>
                </Button>
        </div>
        </div>
    );
}
