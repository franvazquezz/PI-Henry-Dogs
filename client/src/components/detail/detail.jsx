import style from './detail.module.css'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeDetail } from '../../redux/actions';

const Detail = () =>{
    const dispatch = useDispatch()
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const url = `http://localhost:3001/dogs/${id}`;

    const detailsEmpty = () => {
       dispatch(removeDetail())
    }
    useEffect(()=> {
        axios.get(url)
        .then(({data}) => {
            setDetail(data);
        });
        return setDetail({});
    }, [id]);
    return (
        <div className={style.main}>
            <div className={style.carta}>
                <Link to={`/dogs`}>
                <button className={style.back} onClick={detailsEmpty}>Back</button>
                </Link>
                <br></br>
                <img className={style.img}src={detail[0]?.img && detail[0]?.img}/>
                <h1 className={style.name}> {detail[0]?.name && detail[0]?.name}</h1>
                <h3 className={style.status}> Life span: {detail[0]?.life_span && detail[0]?.life_span}</h3>
                <h3 className={style.status}> Weight: {detail[0]?.weight_min && detail[0]?.weight_min} - {detail[0]?.weight_max && detail[0]?.weight_max} kg</h3>
                <h3 className={style.status}> Height: {detail[0]?.height_min && detail[0]?.height_min} - {detail[0]?.height_max && detail[0]?.height_max} cm</h3>
                <h3 className={style.status}> Temperament: {detail[0]?.temperaments && detail[0]?.temperaments}</h3>
                <Link to={`/dogs`}>
                <button className={style.back} onClick={detailsEmpty}>Back</button>
                </Link>
            </div>
        </div>
    );
};


export default Detail;