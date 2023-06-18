import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, height_min, height_max, weight_min, weight_max, img, life_span, temperaments}) => {
   return (
      <div className={style.contenedor}>
        <div className={style.contenedor__content}> 
         <Link to={`/dogs/${id}`}>
            <img className={style.imagen} src={img} alt='' />
         </Link>
         <h1 className={style.name}>{`${name[0].toUpperCase()}${name.substring(1)}`}</h1>
         <h3 className={style.status}>{weight_min} kg - {weight_max} kg</h3>
         <h3 className={style.status}>{height_min} cm - {height_max} cm</h3>
         </div>
      </div>
   );
};

export default Card