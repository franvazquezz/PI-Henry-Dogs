import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
     setName(event.target.value)
  }
  
  return (
     <div  className={style.search}>
        <input placeholder='Insertar Raza' className={style.input}type='search' onChange={handleChange} value={name}/>
        <button className={style.glowonhover} onClick={() =>{onSearch(name)}}>Buscar</button>
     </div>
  );
}

export default SearchBar;