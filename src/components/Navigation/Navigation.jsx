import { NavLink, Outlet } from "react-router-dom"
import style from './Navigation.module.css'
function Navigation () {


    return (
        <>
        <nav className={style.navigation}>
         
                <NavLink className={style.link} to='/'>Home</NavLink>
                <NavLink className={style.link} to='/movies'>Movies</NavLink>
        </nav>
        
        </>
    )
}

export default Navigation