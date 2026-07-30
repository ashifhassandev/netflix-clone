import "./TitleCards.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useMovies from '../../hooks/useMovies';
import netflix_spinner from "../../assets/netflix_spinner.gif";

const TitleCards = ({ title, category }) => {
  const { movieList, loading } = useMovies(category || "now_playing");
  const cardsref = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsref.current) {
      cardsref.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const currentRef = cardsref.current;

    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsref}>
        {movieList.map((movie) => (
          <Link to={`/player/${movie.id}`} className="card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
            <p>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;