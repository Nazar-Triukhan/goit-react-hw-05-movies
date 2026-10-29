// import s from './Revies.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "../../services/api"

function Revies() {

    const [revies, setRevies] = useState([])
    const {movieID} = useParams()
    
    useEffect(() => {
        async function  fetchRevies() {
            const data = await getMovieReviews(movieID)
            setRevies(data)
        }
        fetchRevies()
    }, [movieID])

    console.log(revies)

    return (
        <>
            <h1>Revies</h1>
         {revies.length === 0? (<p>no revies</p>): (<ul>
            {revies.map(e => {
                return (
                    <li key={e.id}>
                        <h3>{e.author}</h3>
                        <p>{e.content}</p>
                    </li>
                )
            })}
         </ul>)}
        </>


    )
}

export default Revies