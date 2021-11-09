import PropTypes from "prop-types";

function MovieDetail({posterImg,title,likeCount,rating,runtime,year,summary,genres}) {
    return (
        <div>
            <img src={posterImg} alt={title}/>
            <h1>{title}</h1>
            <h2>{year}</h2>
            <h2>{rating}</h2>
            <h2>{runtime}</h2>
            <h2>{likeCount}</h2>
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}    
            </ul>
            <p>{summary}</p>
        </div>
    );
}

MovieDetail.prototype ={
    posterImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetail;