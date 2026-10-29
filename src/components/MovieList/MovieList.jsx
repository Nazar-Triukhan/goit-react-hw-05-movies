// import s from './MoviesList.module.css'
import { Link , useLocation} from "react-router-dom"


function MoviesList({movies}) {

    const location = useLocation()
    console.log(location)

    return (

    <ul>{movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link state={location} to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
    })}</ul>

    )
}

export default MoviesList