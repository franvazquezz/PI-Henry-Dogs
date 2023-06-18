import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css';
import { useState } from 'react';
import { getDogByName } from '../../redux/actions'

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

   return (
      <div  className={style.search}>
         <input placeholder='Insert Breed' className={style.input}type='search' onChange={handleChange} value={name}/>
         <button className={style.glowonhover} onClick={() =>{onSearch(name)}}>🔎</button>
      </div>
   );
}

export default SearchBar;