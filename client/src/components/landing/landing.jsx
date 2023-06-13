import {Link} from 'react-router-dom'
import style from './landing.module.css'

const Landing = () => {
  return (
    <div className={style.Landing}>
      <h1 className={style.h1}>Henry Dogs</h1>
      <Link to='/dogs'><button>Ir a home page</button></Link>
    </div>
  );
}

export default Landing;
