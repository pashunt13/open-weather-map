import "../styles/CurrentWeather.css";

interface CurrentWeatherProps {
  temperature?: number;
  description?: string;
  windSpeed?: number;
  atmoPressure?: number;
  humidity?: number;
  ultraviolet?: number;
  dewPoint?: number;
  visibility?: number;
  search: string;
}

const CurrentWeather = ({ search }: CurrentWeatherProps) => {
  if (search === "") return <></>;

  return (
    <div className="current-containter">
      <span className="orange-text">Jul 31, 01:10pm</span>
      <h2>London, GB</h2>
      <div className="current-temp">20°C</div>
      <div className="current-desc">
        Feels like 20°C. Scattered clouds. Moderate breeze
      </div>
      <ul className="current-list">
        <li className="current-item"> 7.7m/s W</li>
        <li className="current-item">1003 hPa</li>
        <li className="current-item">Humidity: 75%</li>
        <li className="current-item">UV: 3</li>
        <li className="current-item">Dew point: 15°C</li>
        <li className="current-item">Visibility: 10.0km</li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
