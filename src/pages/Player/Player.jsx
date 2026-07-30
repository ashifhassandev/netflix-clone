import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';
import useMovies from "../../hooks/useMovies";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movieDetail, loading } = useMovies(id, true);

  if (loading) {
    return (
        <div className="loading-spinner">
            <img src={netflix_spinner} alt="Loading..." />
        </div>
    );
  }

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
        <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${movieDetail.key}`}
            title={movieDetail.name || "No title"}
            frameBorder="0"
            allowFullScreen
        />
        <div className="player-info">
            <p>{movieDetail.published_at?.slice(0, 10) || "Unknown Date"}</p>
            <p>{movieDetail.name || "No Name"}</p>
            <p>{movieDetail.type || "No Type"}</p>
        </div>
    </div>
  );
};

export default Player;
