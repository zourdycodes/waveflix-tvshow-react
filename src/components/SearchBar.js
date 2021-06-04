import { useState, useContext } from "react";
import Alert from "./Alert";
import ShowsContext from "../contexts/shows/showContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchShows } = useContext(ShowsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    // console.log(`Searching for term: ${searchTerm}`);
    searchShows(searchTerm);
  };

  return (
    <div className="searchBar">
      <Alert message="Please type something!" type={"danger"} />
      <form className="searchBar__form">
        <input
          type="text"
          placeholder="Search For Your favorit TV show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
