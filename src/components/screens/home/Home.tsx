import {FC} from 'react';
import Image from 'next/image'
import { Roboto, Pacifico } from 'next/font/google'
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'
import Advantages from '@/components/advantages/Advantages';
import { useRouter } from 'next/router';

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
            {/* <span>p</span>
            <span>a </span>
            <span>A</span>
            <span>l</span>
            <span>e</span>
            <span>x</span> */}
        </span>
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