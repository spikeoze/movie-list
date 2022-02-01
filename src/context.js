import React, { useContext, useState, useEffect } from "react";
import data from "./data";
const AppContext = React.createContext();

const allGenres = ["all", ...new Set(data.map((movie) => movie.genre))];
// console.log(allGenres);

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState(data);
  const [showInfoBox, setshowInfoBox] = useState(false);
  const [info, setInfo] = useState({});
  const [genres, setGenres] = useState(allGenres);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage, setMoviePerPage] = useState(8);


  const genreFilter = (genre) => {
    if (genre === "all") {
      setMovies(data);
      return;
    }

    const filterGenre = data.filter((movie) => movie.genre === genre);
    setMovies(filterGenre);
  };

  const openBox = (name) => {
    const movieFound = movies.find((movie) => movie.name === name);
    // console.log(movieFound);
    setInfo(movieFound);
    setshowInfoBox(true);
  };
  const closeBox = () => {
    setshowInfoBox(false);
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        openBox,
        closeBox,
        showInfoBox,
        info,
        genres,
        genreFilter,
        currentPage,
        setCurrentPage,
        moviePerPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
