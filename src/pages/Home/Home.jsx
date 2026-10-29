import MoviesList from "../../components/MovieList/MovieList"
import { getTrangingMovies } from "../../services/api"
import { useEffect, useState } from "react"

function Home () {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const movies = await getTrangingMovies()

            setMovies(movies)
        }
        fetchMovies()
    }, [])



    return (
        <section>
            <h1>Trending today</h1>

            <MoviesList movies={movies}/>
        </section>
    )
}

export default Home