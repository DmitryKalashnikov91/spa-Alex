import {FC} from 'react';
import Image from 'next/image'
import { Roboto, Pacifico } from 'next/font/google'
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'
import Advantages from '@/components/advantages/Advantages';
import { useRouter } from 'next/router';
import AboutMassages from '@/components/aboutMassages/AboutMassages';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] } )


const Home: FC = () => {
  const router = useRouter();

  

  return (
    <Layout>
    <div className={roboto.className + ' ' + styles.Home}>
    <h1 className={pacifico.className + ' text-2xl p-10 text-center relative z-10'}>Профессиональный массажный салон</h1>
      <div className={styles.Home_content}>
        
        <div className='flex flex-col items-center content-center'>
        <Image src='/SpaMain1.jpg'  width={400} height={700} alt='background massage'/>
        <button className='text-white text-center p-5 flex font-bold'>
          <a href="#about">Виды массажа<svg className='ml-10' width="36" height="32" viewBox="0 0 98 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7323 71.0239C45.1795 71.6734 45.778 72.2045 46.476 72.5714C47.1741 72.9383 47.9509 73.13 48.7395 73.13C49.5282 73.13 50.305 72.9383 51.003 72.5714C51.7011 72.2045 52.2996 71.6734 52.7468 71.0239L96.6218 7.64888C97.1296 6.91791 97.4274 6.06173 97.4828 5.17338C97.5383 4.28503 97.3492 3.39848 96.9361 2.61005C96.5231 1.82162 95.9018 1.16146 95.1399 0.701309C94.378 0.241157 93.5046 -0.00139593 92.6145 6.04331e-06H4.86457C3.97656 0.00367404 3.10635 0.249346 2.34752 0.7106C1.58869 1.17185 0.96995 1.83124 0.557847 2.61785C0.145744 3.40445 -0.0441341 4.28852 0.00863263 5.17497C0.0613994 6.06142 0.354814 6.91672 0.857324 7.64888L44.7323 71.0239Z" fill="#C353C3"/>
</svg>
          </a>
        </button>
        </div>
        <div className={styles.Home_content}> 
        {/* <span className={styles.orbs}>
            <span>Spa Alex</span>
        </span> */}
        
        <div className='mt-10 text-lg text-center text-white'>
              <p className='p-5'>Массажный салон с профессиональными массажистами. Различные услуги  массажа: Классический, Релакс, Лимфодренажный, Спортивный, Баночный, Антицеллюлитный, массаж лица. А также - все   виды обёртывания</p>
              <button className={styles.Home_content__btn} onClick={() => router.push('/contacts')}>ЗАПИСАТЬСЯ</button>
        </div>
          
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