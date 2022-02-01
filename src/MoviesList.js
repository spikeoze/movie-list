import React, { useState } from "react";
import { useGlobalContext } from "./context";

function MoviesList() {
  const { movies, openBox, currentPage, setCurrentPage, moviePerPage } = useGlobalContext();

  

  //? Sets current page to the target id which equals the button numbers
  const handlePage = (e)=>{
    setCurrentPage(Number(e.target.id))
  }

  //? Logic to get the last and first index on the current page 
  const indexOfLastMovie = currentPage * moviePerPage; // 8, 16
  const indexOfFirstMovie = indexOfLastMovie - moviePerPage; // 0, 8
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie); // movie.slice(0, 8), movie.slice(8, 16)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movies.length / moviePerPage); i++) {
    pageNumbers.push(i);
  }

  //? For getting movies info
  const handleClick = (e)=>{
    const name = e.target.name;
    openBox(name)
  }

  
  return (
    <section className="section movie-section">
      <div className="page-btn">
        {pageNumbers.map((number, index) => {
          return (
            <button className={`${currentPage === number? 'btn currentBtn' : 'btn'}`} key={index} id={number} onClick={handlePage}>
              {number}
            </button>
          );
        })}
      </div>

      <article className="movieList">
        {currentMovies.map((movie, index) => {
          const { image, name, year } = movie;
          return (
            <div key={index} className="movieCard" >
              <img src={image} className="movieImg" alt={name} name={name} onClick={handleClick} />
              <h5>{name.substring()}</h5>
              <p>{year}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default MoviesList;
