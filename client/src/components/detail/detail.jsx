import style from './detail.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDogById } from '../../redux/actions';
import axios from 'axios';

const Detail = () =>{
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const url = `http://localhost:3001/dogs/${id}`;

    useEffect(()=> {
        axios.get(url)
        .then(({data}) => {
            setDetail(data);
        });
        return setDetail({});
    }, [id]);

    return (
        <div>
            <h1>Detail</h1>
            <h1 className={style.name}> {detail.name && detail.name}</h1>
            <h3 className={style.status}> Años de vida: {detail.life_span && detail.life_span}</h3>
            <h3 className={style.status}> Peso: {detail.weight && detail.weight}</h3>
            <h3 className={style.status}> Altura: {detail.height && detail.height}</h3>
            <h3 className={style.status}> Temperamentos: {detail.temperament && detail.temperament}</h3>
        </div>
    );
};


export default Detail;