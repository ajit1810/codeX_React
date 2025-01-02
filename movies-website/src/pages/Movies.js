import React from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movie,isLoading } = useGlobalContext();

  if (isLoading) {
    return(
      <div className="">
          <div className="loading">
            Loading...
          </div>
      </div>
    )
  }

  
  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
      
        {movie.map((index) => {
          const { imdbID, Title, Poster } = index;
          const movieName = Title.substring(0,15);
          return (
            <Link to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName.length >= 15 ?`${movieName}...`:movieName }</h2>
                  <img src={Poster} alt={imdbID}/>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
