import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './styles.css'

const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                "Authorization": import.meta.env.VITE_APP_TMDB_API_TOKEN,
                "accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { setMovies(data.results) })
    }, [])


    return <div className="movies">
        {
            movies.length ? movies.map((item) => {
                return <MovieCard key={item.id} title={item.title} image={item.poster_path}></MovieCard>
            }) :
                <h1>Loading...</h1>
        }
    </div>
}

export default Movies