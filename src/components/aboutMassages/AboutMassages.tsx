import {FC} from 'react';
import styles from './AboutMassages.module.scss';

type TypeMassages = {
    id: string
    time: string
    name: string
    text: string
    price: number
}

const massageDB: TypeMassages[]= [
    {
        id: 'classic',
        time: '60 минут',
        name: 'Классический массаж',
        text: 'При классическом массаже выводятся продукты распада, шлаки и токсины, расщепляются жиры, кожа, разглаживается, становясь упругой и эластичной, уменьшаются проявления целлюлита.',
        price: 3000
    },
    {
        id: 'relax',
        time: '60 минут',
        name: 'Релакс массаж',
        text: 'Релакс-массаж способствует снятию усталости, повышению работоспособности и используется в качестве профилактики переутомления, эмоционального напряжения, стресса. Он придает телу легкость и энергию.',
        price: 3000
    },
    {
        id: 'neckArea',
        time: '30 минут',
        name: 'Массаж шейно-воротниковой зоны (швз)',
        text: 'Массаж шейно-воротниковой зоны в целом несет оздоровительный эффект для организма, повышает жизненный тонус и оказывает много других положительных воздействий.',
        price: 1800
    },
    {
        id: 'anticellulite',
        time: '60 минут',
        name: 'Антицеллюлитный массаж',
        text: 'Антицеллюлитный массаж помогает кислороду проникнуть в глубокие слои кожи и ускоряет лимфатический отток. Благодаря этому виду массажа в подкожно-жировом слое нормализуется обмен веществ, очаги целлюлита выводятся из организма с лишней жидкостью.',
        price: 3000
    },
    {
        id: 'correct',
        time: '60 минут',
        name: 'Корректирующий массаж',
        text: 'Корректирующий массаж способствует расщеплению жира, уменьшению объемов тела и делает фигуру точеной и пропорциональной.',
        price: 3000
    },
    {
        id: 'face',
        time: '45 минут',
        name: 'Массаж лица',
        text: 'При регулярных курсов массажа лица: разглаживаются мелкие морщины запускается синтез коллагена, который отвечает за молодость лица, улучшается цвет лица, кожа начинает сиять изнутри, приобретает бархатистый вид',
        price: 2500
    },
    {
        id: 'lymphatic',
        time: '60 минут',
        name: 'Лимфодренажный массаж',
        text: 'Выводит воду из тела, убирает отёчность. Его используют для коррекции фигуры, омоложения, реабилитации после травм и операций, восстановления после тяжёлых тренировок.',
        price: 3000
    },
]


const AboutMassages: FC = (): JSX.Element => {
  return (
    <section className={styles.About} id='about'>
        <h2>Мы предлагаем:</h2>
        <div className={styles.About_content}>
                {massageDB.map(({id, name, text, price, time}) => (<div className={styles.About_content__block} key={id}>
                    
                        <h3>{name}</h3>
                        <div className='flex justify-around text-purple-400 mb-4'>
                        <span>{price} рублей</span>    
                        <span>{time}</span>    
                    </div>
                    <p>{text}</p>
                </div>))}
        </div>
    </section>
  )
}

export default AboutMassages