import PropTypes from "prop-types"
import {Link} from "react-router-dom";

function Movies({id,coverImg,title,summary,genres}) {
    return (
        <div>
            <h2>
                <Link to={`/movies/${id}`}>{title}</Link>
            </h2>
            <img src={coverImg} alt={title}/>
            <h3>{summary}</h3>
            <ul>
                {genres.map((g)=><li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movies.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;