import { useRouter } from 'next/router';
import styles from './Main.module.scss';
import Image from 'next/image';

const MainContent = () => {
    const router = useRouter();
    return (
        <div className={styles.Main}>
            <div className='flex flex-col items-center content-center'>
                <Image
                    src='/sss.jpg'
                    width={400}
                    height={700}
                    alt='background massage'
                    className='rounded-3xl shadow-lg shadow-violet-100/50'
                />
                <button className='text-white text-center p-5 mt-11 flex font-bol bg-yellow-600'>
                    <a href='#about'>Виды массажа </a>
                </button>
            </div>
            <div className={styles.Main_content}>
                <div className='mt-10 text-xl text-center text-white'>
                    <p>
                        Массажный салон с профессиональными массажистами. Различные услуги массажа:
                        Классический, Релакс, Лимфодренажный, Спортивный, Баночный, Антицеллюлитный,
                        массаж лица. А также - все виды обёртывания
                    </p>
                    <div className={styles.Main_content__img}>
                        <Image src='/firstSale.jpg' width={300} height={300} alt='Скидка 20%' />
                    </div>
                    <button
                        className={styles.Main_content__btn}
                        onClick={() => router.push('/contacts')}>
                        ЗАПИСАТЬСЯ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
