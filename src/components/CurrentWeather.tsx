import { CurrentWeather as CurrentWeatherModel } from "../models";
import styles from "../styles/CurrentWeather.module.css";

interface CurrentWeatherProps {
  data: CurrentWeatherModel;
}

export function CurrentWeather({ data }: CurrentWeatherProps) {
  function calcWindDirection(degrees: number) {
    if (degrees > 315 || degrees < 45) return "N";
    else if (degrees > 45 && degrees < 135) return "E";
    else if (degrees > 135 && degrees < 225) return "S";
    return "W";
  }

  return (
    <div className={styles["current-containter"]}>
      <span className={styles["orange-text"]}>{data.date}</span>
      <h2>{data.location}</h2>
      <div className={styles["current-temp"]}>{data.temperature}°C</div>
      <div className={styles["current-desc"]}>{data.description}</div>
      <ul className={styles["current-list"]}>
        <li className={styles["current-item"]}>
          {data.windSpeed}m/s {calcWindDirection(data.windDegrees)}
        </li>
        <li className={styles["current-item"]}>{data.atmoPressure} hPa</li>
        <li className={styles["current-item"]}>Humidity: {data.humidity}%</li>
        <li className={styles["current-item"]}>UV: {data.ultraviolet}</li>
        <li className={styles["current-item"]}>Dew point: {data.dewPoint}°C</li>
        <li className={styles["current-item"]}>
          Visibility: {(data.visibility / 1000).toFixed(1)}km
        </li>
      </ul>
    </div>
  );
}
