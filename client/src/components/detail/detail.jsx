import style from './detail.module.css'
import { useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {removeDetails, getDogById} from '../../redux/actions.js'

const Detail = () =>{
    const dispatch = useDispatch()
    const {details} = useSelector(state => state)
    const {id} = useParams();
    const handleRemove = () => {
        return dispatch(removeDetails())
    }
    useEffect(()=>{
        dispatch(getDogById(id))
    }, [dispatch, id])
    console.log(details);
    return (
        <div className={style.main}>
            <div className={style.carta}>
                <Link to={`/dogs`}>
                <button className={style.back} onClick={handleRemove}>Back</button>
                </Link>
                <br></br>
                <img className={style.img}src={details[0]?.img && details[0]?.img}/>
                <h1 className={style.name}> {details[0]?.name && `${details[0]?.name[0].toUpperCase()}${details[0]?.name.substring(1)}`}</h1>
                <h3 className={style.status}> Life span: {details[0]?.createdInDb ? `${details[0]?.life_span} years`: details[0]?.life_span ? details[0]?.life_span : 'No data available'}</h3>
                <h3 className={style.status}> Weight: {details[0]?.weight_min && (details[0]?.weight_min)} - {details[0]?.weight_max && details[0]?.weight_max} kg</h3>
                <h3 className={style.status}> Height: {details[0]?.height_min && details[0]?.height_min} - {details[0]?.height_max && details[0]?.height_max} cm</h3>
                <h3 className={style.status}> Temperaments: {details[0]?.createdInDb ? details[0]?.temperaments && details[0]?.temperaments.map(ele =>` ${ele.name}`).toString(): details[0]?.temperaments && details[0]?.temperaments}</h3>
                <Link to={`/dogs`}>
                <button className={style.back}>Back</button>
                </Link>
            </div>
        </div>
    );
};


export default Detail;