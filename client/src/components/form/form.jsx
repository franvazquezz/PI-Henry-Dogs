import { getTemperaments, postDogs } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import validation from "./validation";


const Form = () =>{
    const dispatch =useDispatch();
    useEffect(()=>{dispatch(getTemperaments())}, [dispatch])
    const {allTemperaments} = useSelector(state => state)
    const [userData, setUserData] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        temperaments: [],
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        console.log(userData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postDogs(userData))
        }
    return (
        <div>
            <h1>Crear una raza </h1>
            <form  onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Nombre de la raza: </label>
                <input placeholder='ej: Caniche Toy' type="text" onChange={handleChange}value={userData.name} name="name"/>
                </div>
                {/* {errors.n1 ? (<p>{errors.n1}</p>) : errors.n2 ? (<p>{errors.n2}</p>) : (<p>{errors.n3}</p>)} */}
                <div>
                <label htmlFor="height">Altura en cm: </label>
                <input placeholder='minimo' name="height_min" onChange={handleChange}value={userData.height_min} type="text"/>
                <input placeholder='maximo' name="height_max" onChange={handleChange}value={userData.height_max} type="text"/>
                </div>
                <div>
                <label htmlFor="weight">Peso en kg: </label>
                <input placeholder='minimo' name="weight_min" onChange={handleChange}value={userData.weight_min} type="text"/>
                <input placeholder='maximo' name="weight_max" onChange={handleChange}value={userData.weight_max} type="text"/>
                </div>
                <div>
                <label htmlFor="temperaments">Temperamentos: </label>
                <select multiple name="selector" id="selector">
                {allTemperaments.map((ele)=>{return(<option type="checkbox" onChange={handleChange}name='temperaments' value={ele}>{ele}</option>)})}
                </select>
                </div>
                <button type="submit">Crear</button>
            </form>
        </div>
    );
};


export default Form;