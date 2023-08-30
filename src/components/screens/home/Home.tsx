import {FC} from 'react';
import { Roboto, Lobster } from 'next/font/google'
import MainContent from '../../main/Main'
import Layout from '@/components/layout/Layout';
import styles from './Home.module.scss'
import Advantages from '@/components/advantages/Advantages';
import { useRouter } from 'next/router';
import AboutMassages from '@/components/aboutMassages/AboutMassages';
import Link from 'next/link';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const lobster = Lobster({ subsets: ['latin'], weight: ['400'] } )


const Home: FC = (): JSX.Element => {
  

  

  return (
    <Layout>
    <div className={styles.Home}>
    <h1 className={lobster.className + ' text-2xl p-10 text-center relative z-10'}>Профессиональный массажный салон</h1>
      <MainContent />
      <h2 className='text-white mt-20 text-2xl text-center'>Наши преимущества</h2>
       <Advantages />
       <AboutMassages />
    </div>
    </Layout>
  )
}

export default Home