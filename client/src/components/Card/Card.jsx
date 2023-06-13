import style from './Card.module.css'
import { Link } from 'react-router-dom';



const Card = ({id, name, height_min, height_max, weight_min, weight_max, img, life_span, temperaments}) => {
   return (
      <div key={id} className={style.contenedor}>
        <div className={style.contenedor__content}> 
         <Link href={`/dogs/${id}`}>
            <img className={style.imagen} src={img} alt='' />
         </Link>
         <h1 className={style.name}>{name}</h1>
         {/* <h3 className={style.status}>{temperaments ? temperaments : 'No hay Datos'}</h3> */}
         <h3 className={style.status}>{weight_min} kg - {weight_max} kg</h3>
         <h3 className={style.status}>{life_span ? life_span : 'No hay datos'}</h3>
         </div>
      </div>
   );
};

export default Card