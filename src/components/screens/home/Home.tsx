import {FC} from 'react';
import Image from 'next/image'
import { Roboto, Pacifico } from 'next/font/google'
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'
import Advantages from '@/components/advantages/Advantages';
import { useRouter } from 'next/router';
import AboutMassages from '@/components/aboutMassages/AboutMassages';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] } )


const Home: FC = () => {
  const router = useRouter();

  

  return (
    <Layout>
    <div className={roboto.className + ' ' + styles.Home}>
    <h1 className={pacifico.className + ' text-4xl text-center relative z-10'}>Профессиональный массажный салон</h1>
      <div className={styles.Home_content}>
        
        <Image src='/SpaMain1.jpg'  width={500} height={800} alt='background massage'/>
        <div className={styles.Home_content__text}> 
        <span className={styles.orbs}>
            <span>Spa Alex</span>
            
        </span>
          <main className='mx-5 mt-10 text-lg text-center'>
              Массажный салон с профессиональными массажистами. Различные услуги  массажа: Классический, Релакс, Лимфодренажный, Спортивный, Баночный, Антицеллюлитный, массаж лица. А также - все   виды обёртывания
              <button className={styles.Home_content__btn} onClick={() => router.push('/contacts')}>ЗАПИСАТЬСЯ</button>
          </main>
          
      </div>
      
      </div>
      <h2 className='text-white mt-20 text-2xl text-center'>Наши преимущества</h2>
       <Advantages />
       <AboutMassages />
    </div>
    </Layout>
  )
}

export default Home