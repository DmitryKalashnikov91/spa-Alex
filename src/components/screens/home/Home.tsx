import {FC} from 'react';
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })


const Home: FC = () => {
  return (
    <Layout>
    <div className={roboto.className + ' ' + styles.Home}>
      
      <div className={styles.Home_content}>
        <Image src='/SpaMain1.jpg' loading='lazy' width={500} height={800} alt='bacground massage'/>
        <div className={styles.Home_content__text}> 
          <h1 className='ml-10 text-5xl shadow-2xl'>
            Spa Alex
          </h1>
          <main className='mx-5 mt-10 text-lg text-center'>
              Массажный салон с профессиональными массажистами. Различные услуги  массажа: Классический, Релакс, Лимфодренажный, Спортивный, Баночный, Антицеллюлитный, массаж лица. А также - все   виды обёртывания
            </main>
            <button className='bg-gray-800 w-2/5 ml-24 mt-16 h-10 text-white'>ЗАПИСАТЬСЯ</button>
        </div>
        
      </div>
       
    </div>
    </Layout>
  )
}

export default Home