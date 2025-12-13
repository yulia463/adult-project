import MainScreen from "@/components/MainScreen/MainScreen";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import styles from "./page.module.scss";
import StatisticsScreen from "@/components/StatisticsScreen/StatisticsScreen";
import DiscoverScreen from "@/components/DiscoverScreen/DiscoverScreen";

export default function Home() {
  return (
      <div className={styles.mainColor}>
        <MainScreen/>
          <TableOfContents/>
          <StatisticsScreen/>
          <DiscoverScreen/>
      </div>
  );
}
