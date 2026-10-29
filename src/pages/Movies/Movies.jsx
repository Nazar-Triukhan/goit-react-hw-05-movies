import { useContext, useState, useEffect } from "react"
import { searchMovies } from "../../services/api"
import MoviesList from "../../components/MovieList/MovieList"

function Movies () {

    const [search, setSearch] = useState('')
    const [movie , setMovie] = useState([])

    function hendelChange (e) {
        setSearch(e.target.value)
    }

    function hendelSubmit (e) {
        e.preventDefault()

        async function searchMovieInput() {
            const data = await searchMovies(search)
            setMovie(data)
        }

        searchMovieInput()

    }   

    console.log(movie)


    return (
        <>
        <form onSubmit={hendelSubmit}>
            <input type="text" name="search" value={search} onChange={hendelChange}/>
            <button type="submit">Serach</button>
        </form>

        <MoviesList movies={movie}/>


        </>
        
    )
}

export default Movies
