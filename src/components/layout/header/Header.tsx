import { Buttons } from '@/components/contactForm/ContactForm'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { FiAlignJustify, FiX } from 'react-icons/fi'
import { Menu } from './Menu'

import styles from './Header.module.scss'

const Header: FC = (): JSX.Element => {
	const [showHead, setShowHead] = useState<boolean>(true)
	const [openBurger, setOpenBurger] = useState<boolean>(false)

	const handleClickMenu = () => {
		setOpenBurger(!openBurger)
	}
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setShowHead(false)
			} else {
				setShowHead(true)
			}
		})
	}, [])
	const { pathname } = useRouter()
	return (
		<header className={styles.Header}>
			{showHead && (
				<div className='flex  content-around border items-center border-b-orange-300'>
					<Link href='tel:+79689893388' className='text-end flex gap-2'>
						<img src='/call.svg' alt='call' width={20} /> +7(968) 989-33-88
					</Link>
					{Buttons.map(btn => (
						<div key={btn.id} className='mx-3'>
							<Link href={btn.link} target='blank'>
								<Image src={btn.img} width={20} height={20} alt={btn.img} />
							</Link>
						</div>
					))}
				</div>
			)}
			<div className={'flex content-evenly items-center gap-32'}>
				<Link className='flex items-center w-36' href={'/'}>
					<Image
						className='rounded'
						src='/SpaAlex.jpg'
						width={70}
						height={70}
						loading='lazy'
						alt='logo'
					/>
					<span className='ml-2'>Spa Alex</span>
				</Link>

				<div
					onClick={handleClickMenu}
					className={styles.burger + ' text-white text-xs flex flex-col gap-1'}
				>
					{!openBurger ? <FiAlignJustify size={30} /> : <FiX size={30} />}
				</div>
			</div>
			{openBurger && (
				<ul className={styles.menu}>
					{Menu.map(item => (
						<li key={item.id}>
							<Link onClick={() => setOpenBurger(!openBurger)} href={item.link}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			)}
		</header>
	)
}

export default Header
