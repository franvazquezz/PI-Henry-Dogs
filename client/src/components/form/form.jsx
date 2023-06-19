import { getTemperaments, getDogs, postDogs } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './form.module.css'


const Form = () =>{
    const dispatch =useDispatch();
    useEffect(()=>{dispatch(getTemperaments())}, [dispatch]);
    const {allTemperaments} = useSelector(state => state);
    const [userData, setUserData] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span: '',
        temperaments: [],
        img: 'https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop',
        createdInDb: true,
    });

    const handlerTemps = (event) => {
        const add = (e) => {
            if(userData.temperaments.includes(e.target.value)){
                return [...userData.temperaments];
            } else {
                return [...userData.temperaments, e.target.value];
            }
        }
        setUserData({
            ...userData,
            temperaments :add(event),
        });
    };

    const handleDeleteTemp = (e) =>{
        setUserData({
            ...userData,
            temperaments: userData.temperaments.filter(temp => temp !== e)
        })
    }

    const [errors, setErrors] = useState({});

    useEffect(()=> {
        setErrors(validation(userData))
    }, [userData])
    
    const validation = (data) => {
        let errors = {};
        !data.name && (errors.name = "Name is required");
        !data.weight_min && (errors.weight_min = "Min weight is required");
        !data.weight_max && (errors.weight_max = "Max weight is required");
        parseInt(data.weight_max) < parseInt(data.weight_min) && (errors.weight_min = "Min weight has to be smaller than max weight");
        !data.height_min && (errors.height_min = "Min height is required");
        !data.height_max && (errors.height_max = "Max height is required");
        parseInt(data.height_max) < parseInt(data.height_min) &&( errors.height_min = "Min height has to be smaller than max height");
        !data.life_span && (errors.life_span = "Life span is required");
        data.temperaments.length === 0 && (errors.temperaments = "At least one temperament is required");
        return errors
    }

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        console.log(userData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postDogs(userData));
        dispatch(getDogs())
        alert(`The new breed ${userData.name} has been created successfully`);
    }
    return (
        <div className={style.todo}>
            <h1>Create a new breed</h1>
            <form  onSubmit={handleSubmit}>
                <div className={style.izq}>
                    <label htmlFor="name">Breed's name </label>
                    <input className={style.input} placeholder='e.g. Caniche Toy' type="text" required={true}onChange={e => handleChange(e)} value={userData.name} name="name"/>
                    {errors.name && (<p>{errors.name}</p>)}
                </div>
                <div className={style.der}>
                    <label htmlFor="weight">Weight in kg </label>
                    <input className={style.input} name="weight_min" type="number" placeholder="Min weight" value={userData.weight_min} autoComplete="off" required={true} onChange={e => handleChange(e)}/>
                    <input className={style.input} name="weight_max" type="number" placeholder="Max weight" value={userData.weight_max} autoComplete="off" required={true} onChange={e => handleChange(e)}/>
                    {errors.weight_min && (<p>{errors.weight_min}</p>)}
                    {errors.weight_max && (<p>{errors.weight_max}</p>)}
                </div>
                <div className={style.der}>
                    <label htmlFor="height">Height in cm </label>
                    <input className={style.input} name="height_min" type="number" placeholder="Min height" value={userData.height_min} autoComplete="off" required={true} onChange={e => handleChange(e)}/>
                    <input className={style.input} name="height_max" type="number" placeholder="Max height" value={userData.height_max} autoComplete="off" required={true} onChange={e => handleChange(e)}/>
                    {errors.height_min && (<p>{errors.height_min}</p>)}
                    {errors.height_max && (<p>{errors.height_max}</p>)}
                </div>
                <div className={style.izq}>
                    <label htmlFor="life_span">Life span in years </label>
                    <input className={style.input} name="life_span" type="number" placeholder="Life span" value={userData.life_span} autoComplete="off" required={true} onChange={e => handleChange(e)}/>
                    {errors.life_span && (<p>{errors.life_span}</p>)}
                </div>
                <div className={style.izq}>
                    <label htmlFor="temperaments">Temperaments: </label>
                    <select onChange={e => handlerTemps(e)}>
                        {
                            allTemperaments?.map(item=>{
                                return (
                                    <option value={item} key={item.name}>{item}</option>
                                )
                        })
                    }
                    </select>
                    {
                        userData.temperaments?.map(item => {
                            return (<div key={item}>
                                <p>{item}</p>
                                <button onClick={() => {handleDeleteTemp(item)}}>❌</button>
                            </div>)
                        })
                        
                    }
                    <p>{console.log(userData.temperaments)}</p>
                    <p>{errors.temperaments && errors.temperaments}</p>
                </div>
                <div className={style.izq}>
                    {!errors.name && !errors.weight_min && !errors.weight_max && !errors.height_min && !errors.height_max &&  !errors.life_span && !errors.temperaments? <button type="submit">Create</button> : 'Complete data'}
                </div>
            </form>
        </div>
    );
};


export default Form;