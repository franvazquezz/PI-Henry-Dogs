import SearchBar from "../searchBar/searchBar.jsx";
import style from "./Nav.module.css"
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <div className= {style.nav}>
            <Link to='/dogs'>
            <button className={style.glowonhover}>Home</button>
            </Link>
            <NavLink to='/create'>
            <button className={style.glowonhover}>Agregar Raza</button>
            </NavLink>
            <SearchBar/>
            <Link to='/'>
            <button className={style.glowonhover}>LogOut</button>
            </Link>
            <Link to='/dogs'>
            <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbSBkoYZskf49zPotG3_I3JFRflme62TO5A" alt=""/>
            </Link>
            </div>
    )
}

export default Nav;