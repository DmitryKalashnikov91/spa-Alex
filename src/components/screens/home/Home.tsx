import {FC} from 'react';
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })


const Home: FC = () => {
  return (
    <Layout>
    <div className={`${roboto.className} text-amber-200`}>
      
      <div className='w-100 flex justify-center align-middle mt-20'>
        <Image src='/bgmassage.avif' loading='lazy' width={500} height={800} alt='bacground massage'/>
        <div className='w-2/5 flex flex-col'> 
          <h1 className='ml-44 text-5xl shadow-2xl'>
            Spa Alex
          </h1>
          <main className='ml-10 mt-10 text-lg'>
              Массажный салон с профессиональными массажистами. Различные услуги  массажа: Классический, Релакс, Лимфодренажный, Спортивный, Баночный, Антицеллюлитный, массаж лица. А также - все   виды обёртывания
            </main>
            <button className='m-20 bg-gray-800 w-2/5 h-10'>ЗАПИСАТЬСЯ</button>
        </div>
        
      </div>
       
    </div>
    </Layout>
  )
}

export default Home