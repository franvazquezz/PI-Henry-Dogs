import style from './detail.module.css'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Detail = () =>{
    const {id} = useParams()
    const [dog, setDog] = useState()
    const dispatch = useDispatch();
    useEffect(() => {
        axios(`http://localhost:3001/dogs/${id}`)
        .then(({ data }) => {
           if (data.name) {
                setDog(data); 
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setDog({});
     }, [id]);
    return (
        <div>
            <h1>Detail</h1>
            <h1 className={style.name}> {dog.name && dog.name}</h1>
            <h3 className={style.status}> Años de vida: {dog.life_span && dog.life_span}</h3>
            <h3 className={style.status}> Peso: {dog.weight && dog.weight}</h3>
            <h3 className={style.status}> Altura: {dog.height && dog.height}</h3>
            <h3 className={style.status}> Temperamentos: {dog.temperament && dog.temperament}</h3>
        </div>
    );
};


export default Detail;