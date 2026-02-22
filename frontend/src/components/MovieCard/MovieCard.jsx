import PropTypes from "prop-types"

const MovieCard = ({ movie }) => {
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    console.log("Movie: ", movie);
    return <div 
        className="flex flex-col border-1 border-solid justify-between max-w-auto m-2 bg-amber-400">
        <img alt={movie.title} src={imageUrl} />
        <div className="justify-evenly text-amber-950">
            <div className="flex flex-row justify-between p-1">
                <div>
                    <span>{movie.release_date.split("-")[0]}</span>
                    {
                        movie.adult ? <span className="text-red-600">18+</span> : ""
                    }
                </div>
                <div>
                    <span>{movie.vote_average.toPrecision(2)}</span>
                </div>
            </div>
            <span className="text-xl">{movie.title}</span>
        </div>
    </div>
}

MovieCard.propTypes = {
    movie: PropTypes.object
}

export default MovieCard