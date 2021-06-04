import spinner from "../assets/spinner-unscreen.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loading...spinner" />
    </div>
  );
};

export default Loader;
