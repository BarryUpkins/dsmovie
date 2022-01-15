import { ReactComponent as Arrow } from "assets/img/Arrow.svg";
//import { ReactComponent as Arrow } from "../../assets/img/Arrow.svg";
import "./styles.css";

function Pagination(){
{/*
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
        */}
    return(
        <>
            <div className="dsmovie-pagination-container">
                <div className="dsmovie-pagination-box">
                    <button className="dsmovie-pagination-button" disabled={true} >
                        <Arrow />
                    </button>
                    <p>{`${1} de ${3}`}</p>
                    <button className="dsmovie-pagination-button" disabled={false} >
                        <Arrow className="dsmovie-flip-horizontal" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Pagination;