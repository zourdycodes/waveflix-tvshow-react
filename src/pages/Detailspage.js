import { useEffect, useContext } from "react";
import ShowsContext from "../contexts/shows/showContext";

const Detailspage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  useEffect(() => {
    getSingleShow(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * remove the tag element if it exist on JSON.parse from API endpoint
   */
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="detailsPage">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            className="detailsPage__image"
            alt={singleShow.name}
          />
          <div className="detailsPage__info">
            <h1 className="detailsPage__title margin">🔥{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span className="detailsPage__genre margin" key={genre}>
                  📚 Genres: {genre}
                </span>
              ))}
            <p className="detailsPage__status margin">
              <strong>⚡Status: </strong> {singleShow?.status}
            </p>
            <p className="detailsPage__rating margin">
              <strong>💥Rating: </strong>
              {singleShow.rating?.average
                ? singleShow.rating.average
                : "☢ No Rating!"}
            </p>
            <p className="detailsPage__website margin">
              <strong>🚀Official Site: </strong>{" "}
              {singleShow.officialSite ? (
                <a target="_blank" href={singleShow.officialSite}>
                  {singleShow.name}
                </a>
              ) : (
                "🤷‍♀️ No Official Site"
              )}
            </p>
            <h2 className="title__desc">Description:</h2>
            <p className="description">
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detailspage;
