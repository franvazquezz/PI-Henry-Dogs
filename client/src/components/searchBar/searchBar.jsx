import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css';
import { useState } from 'react';
import { getDogByName, removeDetails } from '../../redux/actions'

const SearchBar = () => {
   const dispatch = useDispatch()
   const [name, setName] = useState('');

   const handleChange = (event) => {
     setName(event.target.value)
   }
  
   const onSearch = (name) => {
      console.log('hola', name);
      dispatch(getDogByName(name))
   }

   const handleRemove = () => {
      return dispatch(removeDetails())
  }

   return (
      <div  className={style.search}>
         <input placeholder='Insert Breed' className={style.input}type='search' onChange={handleChange} value={name}/>
         <button className={style.glowonhover} onClick={() =>{onSearch(name)}}>🔎</button>
         <button className={style.glowonhover} onClick={handleRemove}>Reset</button>
      </div>
   );
}

export default SearchBar;