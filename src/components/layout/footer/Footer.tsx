import {FC} from 'react';
import styles from './Footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const icons = [
    {
        id: 1,
        imgSrc: '/Group.svg',
        path: 'https://instagram.com/spa_alexfitness?igshid=YmMyMTA2M2Y=',
        size: 24,
        alt: 'instIcon'
    },
    {
        id: 2,
        imgSrc: '/vk.svg',
        path: 'https://vk.com/spa_alex',
        size: 26,
        alt: 'vkIcon'
    },
    {
        id: 3,
        imgSrc: '/tg.svg',
        path: 'https://t.me/+4RXEfiXa_C0xNDBi',
        size: 30,
        alt: 'tgIcon'
    },
]

const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
        <div className={styles.Footer_links}>
            {icons.map((icon) => (<Link key={icon.id} href={icon.path} target='blank' >
                <Image src={icon.imgSrc} width={icon.size} height={icon.size} alt={icon.alt} />
            </Link>))}
        </div>
        <div className={styles.Footer_copyright}>
            <span className='text-white'>spa-alex.ru &copy; 2023</span>
        </div>
    </footer>
  )
}

export default Footer