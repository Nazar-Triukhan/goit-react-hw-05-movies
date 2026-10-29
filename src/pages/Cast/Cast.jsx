// import s from './Cast.module.css'
import { getActorMovies } from "../../services/api"
import { useParams } from "react-router-dom"
import { useEffect , useState} from "react"

function Cast() {
    const [cast , setCast] = useState([])
    const {movieID} = useParams()

    useEffect(() => {
        async function fetchCast() {
            const data = await getActorMovies(movieID)

            setCast(data)
        }
        fetchCast()

    }, [movieID])

    console.log(cast)

    //   const imgURL = cast.profile_path
    // ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
    // : null;



    return (
    <>
    <h1>Cast</h1>
    <ul>{
        cast.map(e => {
            return (
                <li key={e.id}>
                    {e.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${e.profile_path}`} alt={e.name} />
                          ) : (
                            <p>No image</p>
                          )}
                    <h3>{e.name}</h3>
                    <p>haracter: {e.character}</p>
                </li>
            )
        })
        }</ul>
    </>
    
    

    )
}

export default Cast