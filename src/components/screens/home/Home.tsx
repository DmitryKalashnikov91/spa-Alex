import AboutMassages from '@/components/aboutMassages/AboutMassages'
import Advantages from '@/components/advantages/Advantages'
import { Cormorant_Garamond, Roboto } from 'next/font/google'

import { FC, useEffect } from 'react'
import MainContent from '../../main/Main'
import styles from './Home.module.scss'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const lobster = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const Home: FC = (): JSX.Element => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.Home}>
			{
				<h1
					className={
						lobster.className + ' text-4xl my-40 text-center relative z-10'
					}
				>
					Профессиональный массажный салон
				</h1>
			}
			<MainContent />
			<h2 className='text-white mt-20 text-2xl text-center'>
				Наши преимущества
			</h2>
			<Advantages />
			<AboutMassages />
		</div>
	)
}

export default Home
