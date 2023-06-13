import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { useEffect } from 'react';
import style from './Cards.module.css'
import { getDogs } from '../../redux/actions';



const Cards = () =>{
   const dispatch = useDispatch();
   useEffect(()=>{dispatch(getDogs())}, [dispatch])
   const {allDogs} = useSelector(state => state)
   return (
   <div className={style.cont} >
      <h1>Home God</h1>
      <div className={style.container}>
         {allDogs.map(({id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, img})=>{
            return (
               <Card 
               id = {id}
               name = {name}
               height_min = {height_min}
               height_max = {height_max}
               weight_min = {weight_min}
               weight_max = {weight_max}
               life_span = {life_span}
               img = {img}
               temperaments = {temperaments}
               />
           )
         })
      }
   </div>
   </div>
   )
}

export default Cards;