import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, height_min, height_max, weight_min, weight_max, img, life_span, temperaments}) => {
   const showWeight = () => {
      if(weight_min && weight_max){
         return `${weight_min} - ${weight_max} kg`
      } else if(weight_min && !weight_max){
         return `${weight_min} kg`
      } else if(!weight_min && weight_max) {
         return `${weight_max} kg`
      }
      else if(!weight_min && !weight_max){
         return 'No data available';
      }
   }
   return (
      <div className={style.contenedor}>
        <div className={style.contenedor__content}> 
         <Link to={`/dogs/${id}`}>
            <img className={style.imagen} src={img} alt='' />
         </Link>
         <h1 className={style.name}>{`${name[0].toUpperCase()}${name.substring(1)}`}</h1>
         <h3 className={style.status}>Weight: {showWeight()}</h3>
         <h3 className={style.status}>Temperaments:<p>{typeof id === 'string' ? temperaments.map(e=> ` ${e.name}`).toString():temperaments? temperaments : 'No data available'}</p></h3>
         </div>
      </div>
   );
};

export default Card