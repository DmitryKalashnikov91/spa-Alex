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
    imgSrc: '/SPA_Alex.jpg',
    text: 'Уютный салон'
  },
  {
    id: 3,
    imgSrc: '/aSpaAlex.jpg',
    text: 'Удобный график: Пн-Вс 10:00 - 22:00'
  },
  {
    id: 4,
    imgSrc: '/check.jpg',
    text: 'Нас легко найти'
  },
]

const Advantages = (props: Props) => {
  return (
    <section className={styles.Advantages}>
        
       {advantagesData.map(({id, imgSrc, text}) => (<div key={id} className={styles.Advantages_block}>
          <Image src={imgSrc} loading='lazy' width={150} height={250} alt='spaFili hands' />
          <span className='text-white'>{text}</span>
        </div>) )} 
    </section>
  )
}

export default Advantages