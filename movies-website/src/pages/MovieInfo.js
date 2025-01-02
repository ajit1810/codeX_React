import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../context/Context';

const MovieInfo = () => {
    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");
    const [isError, setIsError] = useState({ show: 'false', msg: "" });

    const getMovies = async (url) => {
      setIsLoading(true)
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.Response === "True") {
          setMovie( data.Search);
          setIsLoading(false);
          setIsError({
            show: false,
            msg: '',
          });
        } else {
          setIsError({
            show: true,
            msg: data.Error,
          });
        }
      } catch (error) {
        console.log("GetMovies" + error);
      }
    };
  
    useEffect(() => {
     let timeout =  setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
      }, 2000);
      return ()=> clearTimeout(timeout)
    }, [id]);
    if (isLoading) {
      return (
        <section className="movie-section ">
          <div className="loading">Loading....</div>;
        </section>
      );
    }
  
    return (
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <Link to="/" className="back-btn">
              Go Back
            </Link>
          </div>
        </div>
      </section>
    )
}

export default MovieInfo