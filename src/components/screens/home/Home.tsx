import AboutMassages from '@/components/aboutMassages/AboutMassages'
import Advantages from '@/components/advantages/Advantages'
import Reviews from '@/components/reviews'
import { animated, useSpring } from '@react-spring/web'
import { Cormorant_Garamond, Roboto } from 'next/font/google'
import { FC, useEffect } from 'react'
import MainContent from '../../main/Main'
import styles from './Home.module.scss'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const lobster = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })

const Home: FC = (): JSX.Element => {
	const [props, api] = useSpring(
		() => ({
			from: { opacity: 0 },
			to: { opacity: 1 },
			delay: 100,
			config: { duration: 1500 },
		}),
		[]
	)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.Home}>
			{
				<animated.h1
					style={props}
					className={
						lobster.className + ' text-4xl my-40 text-center relative z-10'
					}
				>
					Профессиональный массажный салон
				</animated.h1>
			}

			<MainContent />

			<Advantages />
			<AboutMassages />

			<Reviews />
		</div>
	)
}

export default Home
