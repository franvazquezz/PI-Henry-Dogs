import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { useEffect } from 'react';
import style from './Cards.module.css'
import { getDogs, removeDetail, getTemperaments } from '../../redux/actions';



const Cards = () =>{
   const dispatch = useDispatch();
   useEffect(()=>{dispatch(getDogs())}, [dispatch])
   useEffect(()=>{dispatch(getTemperaments())}, [dispatch]);
   const {allDogs, allTemperaments, details} = useSelector(state => state)
   const detailsFill = () => {
      
   }
   const detailsEmpty = () => {
      dispatch(removeDetail())
   }
   return (
   <div className={style.cont} >
      <h1>Home God</h1>
      <div> 
         <div className={style.filter}>
         <h2>Filter & Order</h2>
         <h3>Filter by: </h3>
         <h4>Temprerament</h4>
         <select>
         {allTemperaments.map((item)=> {
            return (
               <option value={item} key={item}>{item}</option>
            )
         })}
         </select>
         <hr/>
         <h3>Order by: </h3>
         <h4>Name</h4>
         <select>
            <option value="asc">Ascending order</option>
            <option value="desc">Descending order</option>
         </select>

         </div>
      </div>
      <div className={style.container}>
         {details.length ? details.map(({id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, img}) => {
            return (
               <div>
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
               <button className={style.back} onClick={detailsEmpty}>Back</button>
               </div>
               )}) :
         allDogs.map(({id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, img})=>{
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