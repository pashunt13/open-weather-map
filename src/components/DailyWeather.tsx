import styles from "../styles/DailyWeather.module.css";
import { DailyWeather as DailyWeatherModel } from "../models";

interface DailyWeatherProps {
  data: DailyWeatherModel[];
}

export function DailyWeather({ data }: DailyWeatherProps) {
  return (
    <div className={styles["daily-container"]}>
      <h3>8-day forecast</h3>
      <ul className={styles["daily-list"]}>
        {data.map((item) => {
          return (
            <li className={styles["daily-item"]}>
              <span>{item.date}</span>
              <div className={styles["daily-item-data"]}>
                <div>
                  {item.temperature.max} / {item.temperature.min}°C
                </div>
                <span className={styles["daily-description"]}>
                  {item.description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
