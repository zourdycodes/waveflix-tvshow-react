import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import ShowsContext from "../contexts/shows/showContext";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homePage">
      <SearchBar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {shows.map((item) => (
            <h3>{item.show.name}</h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
