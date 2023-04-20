import {FC} from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'


const Header: FC = () => {
    const {pathname} = useRouter();
  return (
    <header className={styles.Header}>
        <Link className='flex items-center' href={'/'}>
            <Image className='rounded' src='/SpaAlex.jpg' width={70} height={70} loading='lazy' alt='logo' />
            <span className='ml-2'>Spa Alex</span>
          </Link>
        <ul className='flex'>
            <li><Link href='/' className={pathname === '/' ? styles.active : '' }>Главная</Link></li>
            <li><Link href='/contacts' className={pathname === '/contacts' ? styles.active : '' }>Контакты</Link></li>
        </ul>
        <Link href='tel:+79999152567' className='text-end me-9 pt-3'>Телефон: +7(968) 989-33-88</Link>
    </header>
  )
}

export default Header