import { Outlet } from "react-router-dom"
import style from './Layaut.module.css'
import Navigation from "../Navigation/Navigation"

function Layaut () {



    return (
        <header >
            <Navigation />
            <Outlet />
        </header>
    )
}

export default Layaut