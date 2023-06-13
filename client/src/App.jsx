import './App.css';
import Landing from './components/landing/landing.jsx';
// import Form from './components/form/form.jsx'
import Detail from './components/form/form.jsx'
import Nav from './components/nav/nav.jsx'
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';


function App() {
  const [dogs, setDogs] = useState([]);
  const {pathname} = useLocation();
  return (
    <div className="App">
      {pathname !== '/' && <Nav/>}
      <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path='/dogs' element = {<Cards/>}/>
        {/* <Route path='/create' element = {<Form/>}/> */}
        <Route path='/dogs/:id' element = {<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
