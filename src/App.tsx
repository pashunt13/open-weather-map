import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { DailyWeather } from "./components/DailyWeather";
import { currentWeatherData, dailyWeatherData } from "./dummy-data";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      {search === "" || (
        <>
          <CurrentWeather data={currentWeatherData} />
          <DailyWeather data={dailyWeatherData} />
        </>
      )}
    </div>
  );
}

export default App;
