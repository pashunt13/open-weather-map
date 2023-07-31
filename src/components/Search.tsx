import "../styles/Search.css";
import { useRef } from "react";

interface SearchProps {
  setSearch: Function;
}

const Search = ({ setSearch }: SearchProps) => {
  let searchValue = "";
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setSearch(searchValue);
    if (inputRef.current != null) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="search-containter">
      <input
        ref={inputRef}
        className="search-text"
        placeholder="Search city"
        onChange={(event) => {
          searchValue = (event.target as HTMLInputElement).value;
        }}
      />
      <button type="submit" className="search-button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
