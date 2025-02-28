import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './styles.css'

const Movies = () => {

    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                "Authorization": import.meta.env.VITE_APP_TMDB_API_TOKEN,
                "accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => { setMovies(data) })
    }, [])


    return <div>
        {
            movies?.results?.length ?
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {movies.results.map((item) => {
                        return <MovieCard key={item.id} movie={item}></MovieCard>
                    })}
                    <h3>{movies.page} / {movies.total_pages}</h3>
                </div> :
                <h1>Loading...</h1>
        }
    </div>
}

export default Movies