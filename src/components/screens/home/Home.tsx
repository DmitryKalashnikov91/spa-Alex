import AboutMassages from '@/components/aboutMassages/AboutMassages'

import { Cormorant_Garamond, Roboto } from 'next/font/google'

import Advantages from '@/components/advantages/Advantages'
import Reviews from '@/components/reviews'
import Image from 'next/image'
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

			<Advantages />
			<AboutMassages />
			<Image
				id='reviews'
				src={'/sertifikat.jpg'}
				width={150}
				height={150}
				alt='яндекс хорошее место'
			/>
			<Reviews />
		</div>
	)
}

export default Home
