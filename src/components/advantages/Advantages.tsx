import Image from 'next/image';
import styles from './Advatages.module.scss'

type Props = {}
const advantagesData = [
  {
    id: 1,
    imgSrc: '/SpaHands.jpeg',
    text: 'Массажисты с 20ти летним стажем'
  },
  {
    id: 2,
    imgSrc: '/place.jpg',
    text: 'Уютный салон'
  },
  {
    id: 3,
    imgSrc: '/plaxe.avif',
    text: 'Удобный график: Пн-Сб 10:00 - 22:00',
    text2: 'Вс - 12:00 - 22:00'
  },
  {
    id: 4,
    imgSrc: '/check.jpg',
    text: 'Нас легко найти',
    text2: 'Адрес: м. Фили, Багратионовский проезд, дом 5, ТРЦ «Филион», 5 этаж. На машине въезжаете на парковку 15 уровень ( 2 часа парковка бесплатная ), вход в Алекс фитнес, идете прямо, проходите лифты и слева находимся мы. Если без машины, на лифте 5 этаж, выходите из лифта направо и слева мы.'
  },
]

const Advantages = (props: Props) => {
  return (
    <section className={styles.Advantages}>
        
       {advantagesData.map(({id, imgSrc, text, text2}) => (<div key={id} className={styles.Advantages_block}>
          <Image src={imgSrc} loading='lazy' priority width={150} height={250} alt='spaFili hands' />
          <span className='text-white text-justify'>{text}<br/>{text2 && `${text2}`}</span>
        </div>) )} 
    </section>
  )
}

export default Advantages