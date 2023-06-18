import Card from '../Card/Card'
import  pancho from '../../../assets/pancho.jpg'
import  maylo from '../../../assets/maylo.jpg'
import  luna from '../../../assets/luna.jpg'
import  chueco from '../../../assets/chueco.jpg'
import style from './About.module.css';

const About = () => {
    return (
        <div className={style.fondo}>
            <div className={style.info}>
            <h1 className={style.pancho} >About</h1>
            <img className={style.foto} src={pancho} alt=''></img>
            <h2 className={style.text}>
                <p>Creado por</p>
                <p>Francisco Vazquez</p> 
                <p>estudiante de Henry
                cohorte 38a</p> 
            </h2>
            </div>
            <div className={style.cards}>
            <Card className={style.card}
               id = {1}
               name = {'Maylo'}
               height_min = {15}
               height_max = {22}
               weight_min = {12}
               weight_max = {17}
               life_span = {16}
               img = {maylo}
               temperaments = {['Active', 'Lively']}
            />
            <Card className={style.card}
               id = {2}
               name = {'Luna'}
               height_min = {20}
               height_max = {27}
               weight_min = {16}
               weight_max = {22}
               life_span = {15}
               img = {luna}
               temperaments = {['Active', 'Lively']}
            />
            <Card className={style.card}
               id = {2}
               name = {'Chueco'}
               height_min = {10}
               height_max = {18}
               weight_min = {7}
               weight_max = {11}
               life_span = {14}
               img = {chueco}
               temperaments = {['Active', 'Lively']}
               />
            </div>
        </div>
    )
}

export default About