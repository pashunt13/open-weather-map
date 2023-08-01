import styles from "../styles/DailyWeather.module.css";

// interface DailyWeatherProps {
//   day?: string;
//   temperature?: number;
//   sub?: string;
// }

const DailyWeather = () => {
  return (
    <div className={styles["daily-container"]}>
      <h3>8-day forecast</h3>
      <ul className={styles["daily-list"]}>
        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>

        <li className={styles["daily-item"]}>
          <span>Mon, Jul 31</span>
          <div className={styles["dayly-item-data"]}>
            <div>21 / 16°C</div>
            <span className={styles["dayly-sub"]}>moderate rain</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DailyWeather;
