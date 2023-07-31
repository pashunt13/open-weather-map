import "../styles/DailyWeather.css";

interface DailyWeatherProps {
  day?: string;
  temperature?: number;
  sub?: string;
  search: string;
}

const DailyWeather = ({ search }: DailyWeatherProps) => {
  if (search === "") return <></>;

  return (
    <div className="daily-container">
      <h3>8-day forecast</h3>
      <ul className="daily-list">
        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>

        <li className="daily-item">
          <span>Mon, Jul 31</span>
          <div className="dayly-item-data">
            <div>21 / 16°C</div>
            <span className="dayly-sub">moderate rain</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DailyWeather;
