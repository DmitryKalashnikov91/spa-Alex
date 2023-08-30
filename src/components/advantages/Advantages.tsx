import { FC } from 'react';
import Image from 'next/image';
import styles from './Advatages.module.scss'

type Props = {id?: number, imgSrc?: string, pictures?: [string], text?: string, text2?: string}
const advantagesData = [
  {
    id: 1,
    imgSrc: '',
    pictures: ['/aSpaAlex.jpg', '/manMass.jpg', '/faceMass.jpg', '/Banki.jpg'],
    text: 'Массажисты с 20-ти летним стажем'
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
    text: '',
    text2: 'м. Фили, ТРЦ Филион'
  },
]

const Advantages: FC = (props: Props): JSX.Element => {
  return (
    <section className={styles.Advantages}>
        {advantagesData.map(({ id, imgSrc, text, text2, pictures}) => (
            <div className={styles.Advantages_block} key={id}>
              {pictures && (
              <div className={styles.Advantages_grid}>{pictures.map((img) => (
                <div key={img} className={styles.Advantages_grid__items}>
                  <Image
                  src={img}
                  width={150}
                  height={250}
                  alt={img} 
                />
                </div>
                ))}
              </div>
            )
          }
          <div key={imgSrc} className={styles.Advantages_about}>
            {imgSrc && <Image  src={imgSrc} width={200} height={300} alt={imgSrc}/>}
          </div>
          <span className='text-white text-center text-sm'>{text} <p>{text2}</p></span>
            </div>
          ))
        }
      
    </section>
    )
}

export default Advantages