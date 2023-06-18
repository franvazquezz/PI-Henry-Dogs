import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import style from './Home.module.css'
import { getDogs, getTemperaments, filterCards, filterByOrigin, orderCardsName, orderCardsWeight} from '../../redux/actions';



const Home = () =>{
   const [aux, setAux] = useState(false);
   const dispatch = useDispatch();
   useEffect(()=>{dispatch(getDogs())}, [dispatch])
   useEffect(()=>{dispatch(getTemperaments())}, [dispatch]);
   const {allDogs, allTemperaments, details} = useSelector(state => state)
   const handleOrderName = (event)=>{
      dispatch(orderCardsName(event.target.value));
      setAux(!aux)
   }
   const handleOrderWeight = (event)=>{
      dispatch(orderCardsWeight(event.target.value));
      setAux(!aux)
   }
   const handleFilter = (event)=>{
      dispatch(filterCards(event.target.value));
   }
   const handleFilterOrigin = (e)=>{
      dispatch(filterByOrigin(e.target.value));
   }
   return (
   <div className={style.cont} >
      <h1>Home God</h1>
      <div> 
         <div className={style.filter}>
         <h2>Filter & Order</h2>
         <h3>Filter by: </h3>
         <h4>Origin </h4>
         <select name="origin" id="" onChange={handleFilterOrigin}>
            <option value="Any">Any</option>
            <option value="Api">Api</option>
            <option value="DataBase">Created</option>
         </select>
         <h4>Temprerament</h4>
         <select onChange={handleFilter}>
            <option value="Any">Any</option>
         {allTemperaments.map((item)=> {
            return (
               <option value={item}>{item}</option>
            )
         })}
         </select>
         <hr/>
         <h3>Order by: </h3>
         <h4>Name</h4>
         <select onChange={handleOrderName}>
            <option value="A" hidden>Order</option>
            <option value="A">Ascending order</option>
            <option value="desc">Descending order</option>
         </select>
         <h4>Weight</h4>
         <select onChange={handleOrderWeight}> 
            <option value="all" hidden>Order</option>
            <option value="A">Lightest to heaviest</option>
            <option value="high">Heaviest to lightest</option>
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

export default Home;