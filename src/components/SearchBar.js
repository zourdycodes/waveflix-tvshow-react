import { useState, useContext } from "react";
import Alert from "./Alert";
import ShowsContext from "../contexts/shows/showContext";
import AlertsContext from "../contexts/alerts/alertContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchShows } = useContext(ShowsContext);

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    // checking for the Alert
    if (searchTerm === "") {
      setAlert("Please write something!", "danger");
    } else {
      // console.log(`Searching for term: ${searchTerm}`);
      searchShows(searchTerm);
    }
  };

  return (
    <div className="searchBar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
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
