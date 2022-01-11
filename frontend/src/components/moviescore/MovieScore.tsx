import MovieStars from "components/moviestars/MovieStars";
import "./styles.css";

function MovieScore(){
    let score = 2.6;
    let count = 2;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;