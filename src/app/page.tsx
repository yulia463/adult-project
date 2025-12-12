import MainScreen from "@/components/MainScreen/MainScreen";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import styles from "./page.module.scss";

export default function Home() {
  return (
      <div className={styles.mainColor}>
        <MainScreen/>
          <TableOfContents/>
      </div>
  );
}
