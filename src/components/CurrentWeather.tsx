import styles from "../styles/CurrentWeather.module.css";

// interface CurrentWeatherProps {
//   temperature?: number;
//   description?: string;
//   windSpeed?: number;
//   atmoPressure?: number;
//   humidity?: number;
//   ultraviolet?: number;
//   dewPoint?: number;
//   visibility?: number;
// }

const CurrentWeather = () => {
  return (
    <div className={styles["current-containter"]}>
      <span className={styles["orange-text"]}>Jul 31, 01:10pm</span>
      <h2>London, GB</h2>
      <div className={styles["current-temp"]}>20°C</div>
      <div className={styles["current-desc"]}>
        Feels like 20°C. Scattered clouds. Moderate breeze
      </div>
      <ul className={styles["current-list"]}>
        <li className={styles["current-item"]}> 7.7m/s W</li>
        <li className={styles["current-item"]}>1003 hPa</li>
        <li className={styles["current-item"]}>Humidity: 75%</li>
        <li className={styles["current-item"]}>UV: 3</li>
        <li className={styles["current-item"]}>Dew point: 15°C</li>
        <li className={styles["current-item"]}>Visibility: 10.0km</li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
