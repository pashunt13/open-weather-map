import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";

function App() {
  const [search, setSearch] = useState("");

  if (search === "") {
    return (
      <div className="App">
        <SearchBar setSearch={setSearch} />
      </div>
    );
  }

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      <CurrentWeather />
      <DailyWeather />
    </div>
  );
}

export default App;
