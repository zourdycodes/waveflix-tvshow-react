import { useReducer } from "react";
import ShowsContext from "./showContext";
import ShowsReducer from "./showReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";
import axios from "axios";

const ShowState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  // reguest API endpoint
  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    // axios
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowState;
