import {FC} from 'react';
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'
import Advantages from '@/components/advantages/Advantages';
import { useRouter } from 'next/router';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })


const Home: FC = () => {
  const router = useRouter();
  return (
    <Layout>
    <div className={roboto.className + ' ' + styles.Home}>
      
      <div className={styles.Home_content}>
        <Image src='/SpaMain1.jpg' loading='lazy' width={500} height={800} alt='bacground massage'/>
        <div className={styles.Home_content__text}> 
          <h1 className='text-center text-5xl shadow-2xl'>
            Spa Alex
          </h1>
          <main className='mx-5 mt-10 text-lg text-center'>
              Массажный салон с профессиональными массажистами. Различные услуги  массажа: Классический, Релакс, Лимфодренажный, Спортивный, Баночный, Антицеллюлитный, массаж лица. А также - все   виды обёртывания
          </main>
          <button className='bg-gray-800 w-2/5 ml-24 mt-16 h-10 text-white caret-transparent' onClick={() => router.push('/contacts')}>ЗАПИСАТЬСЯ</button>
        </div>
      </div>
      <h2 className='text-white mt-20 text-2xl text-center'>Наши преимущества</h2>
       <Advantages />
    </div>
    </Layout>
  )
}

export default Home