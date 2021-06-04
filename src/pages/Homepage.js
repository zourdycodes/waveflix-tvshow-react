import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import ShowsContext from "../contexts/shows/showContext";
import ListItem from "../components/ListItem";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homePage">
      <SearchBar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
              id={item.show.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
