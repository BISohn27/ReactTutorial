import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";

import MovieDetail from "../components/MovieDetail";

function Detail() {
    const {id} =useParams();
    const [movie, setMovie] = useState({});
    const [loading,setLoading] = useState(true);
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <MovieDetail 
                    posterImg={movie.large_cover_image}
                    title={movie.title}
                    likeCount={movie.like_count}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    year={movie.year}
                    summary={movie.description_full}
                    genres={movie.genres}
                />
            </div>
            }
        </div>
    );
}

export default Detail;