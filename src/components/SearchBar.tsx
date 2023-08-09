import { useRef } from "react";
import styles from "../styles/Search.module.css";

interface SearchProps {
  setSearch: (search: string) => void;
}

export function SearchBar({ setSearch }: SearchProps) {
  let setSearchValue = "";
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue = event.target.value;
  }

  function handleClick() {
    setSearch(setSearchValue);
    if (inputRef.current != null) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className={styles["search-containter"]}>
      <input
        ref={inputRef}
        className={styles["search-text"]}
        placeholder="Search city"
        onChange={handleChange}
      />
      <button
        type="submit"
        className={styles["search-button"]}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
