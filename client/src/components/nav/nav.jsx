import SearchBar from "../searchBar/searchBar.jsx";
import style from "./Nav.module.css"
import {Link, NavLink} from 'react-router-dom'
import patita from '../../../assets/patita.png'

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
            <img className={style.img} src={patita} alt=""/>
            </Link>
            </div>
    )
}

export default Nav;