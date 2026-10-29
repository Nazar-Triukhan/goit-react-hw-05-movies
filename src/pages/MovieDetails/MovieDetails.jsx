import { useParams, useLocation, Link, Outlet, NavLink } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import { useEffect, useState } from "react";
import s from "./MovieDetails.module.css";

function MoviesDetails() {
  const location = useLocation()
  const { movieID } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(movieID);

      setMovie(data);
    }
    fetchMovie();
  }, [movieID]);

  const imgURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;
  return (
    <>
    
    <Link to={location.state}>go back</Link>
    <div className={s.box}>
      
      {imgURL ? (
        <img className={s.img} src={imgURL} alt={movie.title} />
      ) : (
        <p>No image</p>
      )}
      <div className={s.wrap}>
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p className={s.text}>{movie.overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <div className={s.box_wraper}>
            {movie.genres?.map((e) => {
              return <p key={e.id}>{e.name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
    <div>
      <nav>
        <h3>Additiol information</h3>
          <NavLink to='cast'>Cast</NavLink>{' | ' }
          <NavLink to='revies'>Reavies</NavLink>
      </nav>
    </div>
    <Outlet />
    </>
  );
}

export default MoviesDetails;
