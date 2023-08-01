import { useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";

function App() {
  const [search, setSearch] = useState("");

  if (search === "") {
    return (
      <div className="App">
        <Search setSearch={setSearch} />
      </div>
    );
  }

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <CurrentWeather />
      <DailyWeather />
    </div>
  );
}

export default App;
