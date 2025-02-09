import './styles.css'

const MovieCard = ({ title, image }) => {
    console.log("Image: ", image)
    const imageUrl = "https://image.tmdb.org/t/p/original" + image

    return <div className="movie-card">
        <img src={imageUrl} />
        <span>{title}</span>
    </div>
}

export default MovieCard