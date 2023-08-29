import {FC} from 'react';
import Image from 'next/image'
import { Roboto, Lobster } from 'next/font/google'
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'
import Advantages from '@/components/advantages/Advantages';
import { useRouter } from 'next/router';
import AboutMassages from '@/components/aboutMassages/AboutMassages';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const lobster = Lobster({ subsets: ['latin'], weight: ['400'] } )


const Home: FC = (): JSX.Element => {
  const router = useRouter();

  

  return (
    <Layout>
    <div className={styles.Home}>
    <h1 className={lobster.className + ' text-2xl p-10 text-center relative z-10'}>Профессиональный массажный салон</h1>
      <div className={styles.Home_content}>
        
        <div className='flex flex-col items-center content-center'>
        <Image src='/SpaMain1.jpg'  width={400} height={700} alt='background massage'/>
        <button className='text-white text-center p-5 flex font-bold'>
          <a href="#about">Виды массажа
          <svg width="28" height="36" viewBox="0 0 49 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.3 33.9C39.4 27.1 35.1 16.4 33.4 13.1C33.4 13.1 33.4 13 33.3 13C33.1 12.6 32.9 12.3 32.8 12.2C31.8 10.8 30.5 9.7 29 9V2.9C29 1.3 27.7 0 26.1 0H7.5C5.9 0 4.6 1.3 4.6 2.9V11C1.8 13.3 0 16.9 0 20.8V47.3C0 49.5 1.8 51.4 4.1 51.4C5.1 51.4 6.1 51 6.8 50.4C6.8 50.4 6.9 50.4 7 50.3C7.8 49.5 8.6 49.5 9.4 50.3C10.1 51 11.1 51.4 12.2 51.4C13.3 51.4 14.2 51 14.9 50.4C14.9 50.4 15 50.4 15.1 50.3C15.9 49.5 16.7 49.5 17.5 50.2C18.2 50.9 19.3 51.4 20.4 51.4C21.5 51.4 22.4 51 23.1 50.4C23.1 50.4 23.2 50.4 23.3 50.3C23.6 50 23.9 49.8 24.2 49.7V68C24.2 70.2 26 72.1 28.3 72.1C30.6 72.1 32.3 70.3 32.3 68V33C33.3 34.2 34.2 34.6 35.5 35.9C42.7 42.8 46.2 40.9 47.8 39.5C49.2 38 48.8 35.5 47.3 33.9Z" fill="#FFD3B6"/>
</svg>
          </a>
        </button>
        </div>
        <div className={styles.Home_content}> 
        
        
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